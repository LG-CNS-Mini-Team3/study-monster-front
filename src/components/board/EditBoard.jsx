import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BoardForm from './BoardForm';
import getBoardInfo from '../../api/board/getBoardInfo';
import getBoardTags from '../../api/board/getBoardTags';
import updateBoard from '../../api/board/updateBoard';
import { EditSection, LoadingIndicator } from './styles/EditBoard.styled';
import { fetchUser } from '../../api/user/AuthApi';

const EditBoard = () => {
  const [boardInfo, setBoardInfo] = useState(null);
  const [boardTags, setBoardTags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { boardId } = useParams();
  const navigate = useNavigate();
  
  // 임시: 실제로는 로그인 상태에서 가져온 유저 ID 사용
  const [userId, setUserId] = useState(); // 로그인된 사용자 ID

  //권순영 추가
  const callUserInfoApi = () => {
    fetchUser().then((response) => {
      setUserId(response.id)
    })
  }


  // 게시글 데이터와 태그 로드
  useEffect(() => {
    callUserInfoApi();
    const fetchBoardData = async () => {
      try {
        setIsLoading(true);
        
        
        const [infoResponse, tagsResponse] = await Promise.all([
          getBoardInfo(boardId),
          getBoardTags(boardId)
        ]);
        
        setBoardInfo(infoResponse);
        
        const tagNames = tagsResponse.map(tag => tag.name);
        setBoardTags(tagNames);
      } catch (err) {
        console.error('게시글 로드 실패:', err);
        setError('게시글을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBoardData();
  }, [boardId]);
  
  // BoardForm에 전달할 초기 데이터 생성
  const initialData = boardInfo && {
    title: boardInfo.title || '',
    content: boardInfo.content || '',
    tags: boardTags || []
  };
  
  const handleSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const boardData = {
        ...formData,
        userId, // 실제 환경에서는 제거하고 인증 정보 활용
      };
      
      const response = await updateBoard(boardId, boardData);
      
      console.log('게시글 수정 성공:', response);
      navigate(`/boards/${boardId}`); // 게시글 상세 페이지로 이동
    } catch (err) {
      console.error('게시글 수정 실패:', err);
      setError('게시글 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    navigate(-1);
  };
  
  if (isLoading) {
    return (
      <EditSection>
        <LoadingIndicator>게시글을 불러오는 중...</LoadingIndicator>
      </EditSection>
    );
  }
  
  return (
    <EditSection>
      {boardInfo ? (
        <BoardForm
          initialData={initialData}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          error={error}
          submitButtonText="수정"
          cancelAction={handleCancel}
        />
      ) : (
        <div className="error-message">게시글을 찾을 수 없습니다.</div>
      )}
    </EditSection>
  );
};

export default EditBoard;