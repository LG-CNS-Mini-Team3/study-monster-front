import styled from "styled-components";

const BoardContent = ({content}) => {
    return (
        <BoardContentDiv>
            {content}
        </BoardContentDiv>
    )
}

export default BoardContent;

const BoardContentDiv = styled.div`
    padding: 15px;
`;