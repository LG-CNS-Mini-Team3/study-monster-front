import styled from "styled-components";
import {formatDateTime} from "../../utils/DateTimeUtil.js";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { MoreVertical, Edit, Trash2 } from "lucide-react"

const BoardHeader = ({boardId, title, created_at, updated_at, userId, nickname, commentCount, writerImgSrc, commentComponentRef,
    isAuthor, onEdit, onDelete
}) => {
    let nav = useNavigate();
    const [showOptions, setShowOptions] = useState(false);

    const onClickWriterProfile = (userId) => {
        nav(`/user/${userId}`);
    }
    const onClickCommentCountDiv = () => {
        commentComponentRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    }

    const handleEdit = () => {
        if (onEdit) {
            onEdit(boardId);
        } else {
            nav(`/boards/${boardId}/update`);
        }
        setShowOptions(false);
    }

    const handleDelete = () => {
        if (onDelete) {
            onDelete(boardId);
        }
        setShowOptions(false);
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

            <RightSectionDiv>
                <CommentCountDiv onClick={onClickCommentCountDiv}>댓글 {commentCount}</CommentCountDiv>
                
                {/* {isAuthor && ( */}
                    <OptionsContainer>
                        <IconButton 
                            onClick={toggleOptions}
                            aria-label="더 보기 옵션"
                        >
                            <MoreVertical size={20} />
                        </IconButton>
                        
                        {/* 드롭다운 메뉴 */}
                        {showOptions && (
                            <OptionsMenu>
                                <OptionButton onClick={handleEdit}>
                                    <Edit size={16} style={{ marginRight: "8px" }} />
                                    수정하기
                                </OptionButton>
                                <DeleteButton onClick={handleDelete}>
                                    <Trash2 size={16} style={{ marginRight: "8px" }} />
                                    삭제하기
                                </DeleteButton>
                            </OptionsMenu>
                        )}
                    </OptionsContainer>
                {/* )} */}
            </RightSectionDiv>
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
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

const RightSectionDiv = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
`;

const OptionsContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
`;

const IconButton = styled.button`
    width: 28px;
    border-radius: 50%;
    border-radius: 100px;
    transition: background-color 0.2s;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #f3f4f6;
    }
`;

const OptionsMenu = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 5px;
    width: 150px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    overflow: hidden;
    border: 1px solid #e5e7eb;
`;

const OptionButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: #f5f5f5;
    }
`;

const DeleteButton = styled(OptionButton)`
    color: #e53e3e;
    
    &:hover {
        background-color: #fff5f5;
    }
`;