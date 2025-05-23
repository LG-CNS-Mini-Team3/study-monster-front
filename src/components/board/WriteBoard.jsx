import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardForm from './BoardForm';
import createBoard from '../../api/board/createBoard';
import { WriteSection } from './styles/WriteBoard.styled';
import { fetchUser } from '../../api/user/AuthApi';

const WriteBoard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  // 임시: 실제로는 로그인 상태에서 가져온 유저 ID 사용
  const [userId, setUserId] = useState(); // 로그인된 사용자 ID

  //권순영 추가
  const callUserInfoApi = () => {
    fetchUser().then((response) => {
      setUserId(response.id)
    })
  }

  useEffect(() => {
    callUserInfoApi();
  });
  
  const navigate = useNavigate();
  
  const handleSubmit = async (formData) => {

    console.log('BoardForm - 현재 태그 상태:', formData);

    try {
      setIsSubmitting(true);
      setError(null);
      
      const boardData = {
        ...formData,
        userId, // 실제 환경에서는 제거하고 인증 정보 활용
      };
      
      const response = await createBoard(boardData);
      
      console.log('게시글 작성 성공:', response);
      navigate(`/boards/${response.id}`); // 게시글 상세 페이지로 이동
    } catch (err) {
      console.error('게시글 작성 실패:', err);
      setError('게시글 작성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    navigate(-1);
  };
  
  return (
    <WriteSection>
      <BoardForm
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        error={error}
        submitButtonText="저장"
        cancelAction={handleCancel}
      />
    </WriteSection>
  );
};

export default WriteBoard;