import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const BoardTag = ({tagList}) => {
    let nav = useNavigate();
    const onClickTag = (tagId) => {
        nav(`/tag/${tagId}`);
    }
    return (
        <BoardTagDiv>
            {
                tagList.map((tag) => {
                    return (<TagDiv onClick={() => onClickTag(tag.tagId)}>#{tag.tagName}</TagDiv>)
                })
            }
        </BoardTagDiv>
    )
}

export default BoardTag;

const BoardTagDiv = styled.div`
    display: flex;
    flex-flow: row;
    padding: 15px;
    border-bottom: 2px solid #888888;
`;

const TagDiv = styled.div`
    border: 2px solid #888888;
    color: #20851f;
    border-radius: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 15px;
    margin-right: 5px;

    &:hover {
        cursor: pointer;
    }
`;