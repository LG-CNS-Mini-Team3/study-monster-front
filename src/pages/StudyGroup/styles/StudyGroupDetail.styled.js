import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 768px;
  margin: 80px auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  font-family: "Noto Sans KR", sans-serif;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 40px 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 600;
    margin-right: 4px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.7;
  margin-top: 2rem;
  margin-bottom: 2rem;
  white-space: pre-wrap;
  color: #333;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

export const DescriptionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const ApplyButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 16px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
  background-color: ${(props) => (props.disabled ? "#ccc" : "#4caf50")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#45a049")};
  }

  &:disabled {
    cursor: default;
  }
`;
