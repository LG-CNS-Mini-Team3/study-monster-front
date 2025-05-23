import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const goToBoard = () => {
    navigate("/boards"); // 실제 라우터 경로에 맞춰서 수정
  };

  return (
    <Container>
      <Title>
        스터디를 기록하고, <br /> 함께 공유하세요!
      </Title>
      <Description>
        여러분의 성장 여정을 기록하고, 스터디원들과 함께 나누세요. 지금 바로
        시작할 수 있어요!
      </Description>
      <Button onClick={goToBoard}>스터디 바로가기 →</Button>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgb(86, 72, 117),
    rgb(120, 88, 142),
    rgb(86, 72, 117)
  );
  color: white;
  padding: 2rem;
  text-align: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 255, 255, 0.04) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 60%
      );
    animation: fogDrift 90s linear infinite;
    z-index: 0;
    filter: blur(60px);
  }

  & > * {
    z-index: 1;
  }

  @keyframes fogDrift {
    0% {
      transform: translate(0%, 0%);
    }
    100% {
      transform: translate(40%, -40%);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const Button = styled.button`
  background-color: white;
  color: #764ba2;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0e5ff;
  }
`;

export default Home;
