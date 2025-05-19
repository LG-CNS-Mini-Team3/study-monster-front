import styled from "styled-components";

export const BoardFeedbackModalImg = styled.img`
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 1000;
    height: 100px;
    width: 100px;
    background: rgba(0, 0, 0, 0.04);
    border-radius: 30px;
    align-content: center;
    cursor: pointer;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.5);
    }
`;

export const FeedbackLoadingIndicatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;