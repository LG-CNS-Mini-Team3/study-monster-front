import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1.5px solid #000;
  padding: 24px;
  margin-bottom: 32px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const Text = styled.span`
  font-size: 15px;
  color: #333;
`;

export const StatusBadge = styled.span`
  background-color: ${({ $status }) =>
    $status === "모집완료" ? "#aaa" : "#4caf50"};
  color: white;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 14px;
`;
