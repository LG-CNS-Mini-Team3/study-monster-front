import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import getBoardInfo from "../../api/board/getBoardInfo.js";
import BoardHeader from "../../components/board/BoardHeader.jsx";
import BoardContent from "../../components/board/BoardContent.jsx";
import BoardTag from "../../components/board/BoardTag.jsx";
import usePageTitle from "../../utils/usePageTitle.js";
import BoardFeedbackModal from "../../components/board/BoardFeedbackModal.jsx";
import BoardDelete from "../../components/board/BoardDelete.jsx"; // ✅ 삭제 컴포넌트 import
import checkAuth from "../../utils/checkAuth.js"; // ✅ 로그인 유저 확인 util

const callBoardInfoApi = (boardId, setBoardInfo) => {
    getBoardInfo(boardId).then((response) => {
        setBoardInfo(response);
    });
};

const callBoardCommentApi = (boardId, setCommentList) => {
    console.log(`board ${boardId}의 comment API 연결 요망`); // TODO: 댓글 API 연결
};

const callBoardTagApi = (boardId, setTagList) => {
    console.log(`board ${boardId}의 tag API 연결 요망`); // TODO: 태그 API 연결
};

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

const writerImgSrc = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"; // TODO: 프로필 이미지 기능 추가

const BoardInfo = () => {
    const { boardId } = useParams();
    const navigate = useNavigate();
    const [boardInfo, setBoardInfo] = useState(initBoardData);
    const [commentList, setCommentList] = useState(initCommentListData);
    const [tagList, setTagList] = useState(initTagListData);
    const [isModalOpen, setModalOpen] = useState(false);
    const commentComponentRef = useRef();
    usePageTitle(`${boardInfo.title}`);

    const { userId, isAdmin } = checkAuth(); // ✅ 현재 로그인 유저 정보 가져오기
    const isAuthor = boardInfo.userId === userId; // ✅ 작성자 여부 확인

    useEffect(() => {
        callBoardInfoApi(boardId, setBoardInfo);
        callBoardCommentApi(boardId, setCommentList);
        callBoardTagApi(boardId, setTagList);
    }, [boardId]);

    const handleEdit = (boardId) => {
        navigate(`/boards/${boardId}/update`);
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
                onEdit={handleEdit}
            />

            <BoardContent content={boardInfo.content} />

            <BoardDelete
                boardId={boardInfo.boardId}
                userId={userId}
                isAdmin={isAdmin}
                isAuthor={isAuthor}
            />

            <BoardTag tagList={tagList} />

            <div ref={commentComponentRef} />

            <BoardFeedbackModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                boardId={boardId}
            />
        </>
    );
};

export default BoardInfo;
