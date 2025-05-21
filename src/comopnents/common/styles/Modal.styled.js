import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    min-width: ${(props) => props.min_width || "300px"};
    max-width: ${(props) => props.max_width || "50%"};
    min-height: ${(props) => props.min_height || "200px"};
    max-height: ${(props) => props.max_height || "50%"};
    overflow-y: auto;
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;