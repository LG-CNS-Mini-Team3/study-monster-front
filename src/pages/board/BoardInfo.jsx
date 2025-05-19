import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import getBoardInfo from "../../api/board/getBoardInfo.js";
import BoardHeader from "../../comopnents/board/BoardHeader.jsx";
import BoardContent from "../../comopnents/board/BoardContent.jsx";
import BoardTag from "../../comopnents/board/BoardTag.jsx";
import usePageTitle from "../../utils/usePageTitle.js";
import BoardFeedbackModal from "../../comopnents/board/BoardFeedbackModal.jsx";

const callBoardInfoApi = (boardId, setBoardInfo) => {
    getBoardInfo(boardId).then((response) => {
        setBoardInfo(response)
    });
}

const callBoardCommentApi = (boardId, setCommentList) => {
    console.log(`board ${boardId}의 comment API 연결 요망`) // TODO board 의 comment API 연결 요망
}

const callBoardTagApi = (boardId, setTagList) => {
    console.log(`board ${boardId}의 tag API 연결 요망`) // TODO board 의 tag API 연결 요망
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

const initCommentListData = [{}, {}, {}]
const initTagListData = [
    {tagName: "figma", tagId: 1},
    {tagName: "UI/UX", tagId: 2},
    {tagName: "컴포넌트", tagId: 3},
]

const writerImgSrc = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"; // TODO 프로필 이미지 기능 추가

const BoardInfo = () => {
    const {boardId} = useParams();
    const [boardInfo, setBoardInfo] = useState(initBoardData);
    const [commentList, setCommentList] = useState(initCommentListData);
    const [tagList, setTagList] = useState(initTagListData);
    const [isModalOpen, setModalOpen] = useState(false);
    const commentComponentRef = useRef();
    usePageTitle(`${boardInfo.title}`);

    useEffect(() => {
        callBoardInfoApi(boardId, setBoardInfo);
        callBoardCommentApi(boardId, setCommentList);
        callBoardTagApi(boardId, setTagList);
    }, [boardId]);

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
            />
            <BoardContent content={boardInfo.content}/>
            <BoardTag tagList={tagList}/>
            <div ref={commentComponentRef}/>
            <BoardFeedbackModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        </>
    )
}

export default BoardInfo;