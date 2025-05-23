import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Badge } from "../common/styles/TagBadge.styled";

const BoardTag = ({ tagList }) => {
  let nav = useNavigate();
  const onClickTag = (tagId) => {
    nav(`/tag/${tagId}`);
  };
  return (
    <BoardTagDiv>
      {tagList.map((tag) => {
        return (
          <Badge key={tag.id} onClick={() => onClickTag(tag.id)}>
            #{tag.name}
          </Badge>
        );
      })}
    </BoardTagDiv>
  );
};

export default BoardTag;

const BoardTagDiv = styled.div`
  display: flex;
  flex-flow: row;
  padding: 15px;
  border-bottom: 2px solid #888888;
`;
