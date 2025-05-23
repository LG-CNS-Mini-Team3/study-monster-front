import { replace, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import getBoardInfo from "../../api/board/getBoardInfo.js";
import BoardHeader from "../../components/board/BoardHeader.jsx";
import BoardContent from "../../components/board/BoardContent.jsx";
import BoardTag from "../../components/board/BoardTag.jsx";
import usePageTitle from "../../utils/usePageTitle.js";
import BoardFeedbackModal from "../../components/board/BoardFeedbackModal.jsx";
import BookmarkButton from "../../components/bookmark/BookmarkButton.jsx";
import Like from "../../components/Like/Like.jsx";
import Comment from "../../components/Caption/Comment.jsx";
import BookmarkList from "../../components/bookmark/BookmarkList.jsx";
import { listComment } from "../../api/comment/comment_api.js";
import { fetchUser } from "../../api/user/AuthApi.jsx";
import deleteBoard from "../../api/board/deleteBoard.js";

const callBoardInfoApi = (boardId, setBoardInfo) => {
    getBoardInfo(boardId).then((response) => {
        setBoardInfo(response);
    });
};

const callBoardCommentApi = async (boardId, setCommentList) => {
    const comments = await listComment(boardId)
    setCommentList(comments)
};

const callBoardTagApi = (boardId, setTagList) => {
    getBoardTags(boardId)
        .then((response) => {
            setTagList(response);
        })
        .catch((error) => {
            console.error('태그 조회 실패:', error);
            setTagList([]);
        });
};


//권순영 추가
const callUserInfoApi = (setUserInfo) => {
  fetchUser().then((response) => {
    setUserInfo(response)
  })
}

const initBoardData = {
    boardId: 0,
    title: "",
    content: "",
    created_at: "",
    updated_at: "",
    userId: 0,
    email: "",
    nickname: "",
};

const initCommentListData = [{}, {}, {}];
const initTagListData = [
    { tagName: "figma", tagId: 1 },
    { tagName: "UI/UX", tagId: 2 },
    { tagName: "컴포넌트", tagId: 3 },
];

//권순영 추가
const initUserData = {
  id: 0,
  email: "",
  nickname: "",
  name: ""
}

const writerImgSrc = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"; // TODO 프로필 이미지 기능 추가

const BoardInfo = () => {
    const { boardId } = useParams();
    const navigate = useNavigate();
    const [boardInfo, setBoardInfo] = useState(initBoardData);
    const [commentList, setCommentList] = useState(initCommentListData);
    const [tagList, setTagList] = useState(initTagListData);
    const [isModalOpen, setModalOpen] = useState(false);

    //권순영 추가
    const [userInfo, setUserInfo] = useState(initUserData);

    const commentComponentRef = useRef();
    usePageTitle(`${boardInfo.title}`);

    useEffect(() => {
        callBoardInfoApi(boardId, setBoardInfo);
        callBoardCommentApi(boardId, setCommentList);
        callBoardTagApi(boardId, setTagList);
        callUserInfoApi(setUserInfo);
    }, [boardId]);

    // TODO: 현재 사용자가 작성자인지 확인
    // const isAuthor = 

    const handleEdit = (boardId) => {
        navigate(`/boards/${boardId}/update`);
    };
    const handleDelete = (boardId) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            deleteBoard(boardId)
                .then(() => {
                    alert("게시글이 삭제되었습니다.");
                    navigate("/boards", {replace:true});
                })
                .catch((error) => {
                    console.error("게시글 삭제 중 오류:", error);
                    alert("게시글 삭제에 실패했습니다.");
                });
        }
    };

    return (
        <>
            <BoardHeader
                boardId={boardInfo.boardId}
                title={boardInfo.title}
                created_at={boardInfo.created_at}
                updated_at={boardInfo.updated_at}
                userId={boardInfo.userId}
                nickname={boardInfo.nickname}
                commentCount={commentList.length}
                writerImgSrc={writerImgSrc}
                commentComponentRef={commentComponentRef}
                // isAuthor={isAuthor}
                onEdit={handleEdit}
                onDelete={handleDelete}
                //권순영 추가
                loginId={userInfo.id}
            />
            <BoardContent content={boardInfo.content}/>
            <BoardTag tagList={tagList}/>
            <div ref={commentComponentRef}/>
            <Like userId = {userInfo.id} boardId = {boardId}/>
            <Comment userId = {userInfo.id} boardId={boardId}/>
            <BoardFeedbackModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} boardId={boardId}/>
        </>
    );
};

export default BoardInfo;
