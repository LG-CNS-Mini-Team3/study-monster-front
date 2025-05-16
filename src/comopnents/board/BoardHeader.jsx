import styled from "styled-components";
import {formatDateTime} from "../../utils/DateTimeUtil.js";
import {useNavigate} from "react-router-dom";

const BoardHeader = ({boardId, title, created_at, updated_at, userId, nickname, commentCount, writerImgSrc, commentComponentRef}) => {
    let nav = useNavigate();
    const onClickWriterProfile = (userId) => {
        nav(`/user/${userId}`);
    }
    const onClickCommentCountDiv = () => {
        commentComponentRef.current?.scrollIntoView({behavior: "smooth", block: "end"});
    }
    return (
        <BoardHeaderDiv>
            <BoardHeaderInfoDIv>
                <BoardHeaderTitle>{title}</BoardHeaderTitle>
                <BoardHeaderSubTitle>
                    <BoardWriterDiv onClick={() => onClickWriterProfile(userId)}><BoardWriterImg src={writerImgSrc}/> {nickname}</BoardWriterDiv>
                    |<BoardCreatedDateDiv>{formatDateTime(created_at)}</BoardCreatedDateDiv>
                </BoardHeaderSubTitle>
            </BoardHeaderInfoDIv>
            <CommentCountDiv onClick={onClickCommentCountDiv}>댓글 {commentCount}</CommentCountDiv>
        </BoardHeaderDiv>
    )
}

export default BoardHeader;

const BoardHeaderDiv = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    border-bottom: 1.5px solid #000000;
    padding: 15px;
`;

const BoardHeaderInfoDIv = styled.div`
    display: flex;
    flex-flow: column;
`;

const BoardHeaderTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const BoardHeaderSubTitle = styled.div`
    display: flex;
    flex-flow: row;
`;

const BoardWriterImg = styled.img`
    display: flex;
    align-items: center;
    margin-right: 5px;
    height: 20px;
    border-radius: 15px;
    border: 1px solid black;
`;

const BoardWriterDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    &:hover {
        cursor: pointer;
    }
`;

const BoardCreatedDateDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
`;

const CommentCountDiv = styled.div`
    display: flex;
    align-items: flex-end;
    &:hover {
        cursor: pointer;
    }
`;