import styled from "styled-components";

export const BellContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const RedDot = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

export const InviteModal = styled.div`
  position: absolute;
  top: 36px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  padding: 12px;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
