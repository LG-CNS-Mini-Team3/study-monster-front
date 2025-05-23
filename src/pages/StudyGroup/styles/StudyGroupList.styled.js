import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 5cm;
  box-sizing: border-box;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWithBell = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 5cm;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 기본은 2개씩
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 태블릿 이하에서는 1개씩
  }
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const CreateButton = styled.button`
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;
