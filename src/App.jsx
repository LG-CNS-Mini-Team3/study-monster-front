import { Route, Routes } from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import BoardList from "./pages/board/BoardList.jsx";
import WriteBoard from "./components/board/WriteBoard.jsx";
import EditBoard from "./components/board/EditBoard.jsx";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import { Container } from "lucide-react";
import Header from "./components/header/Header.jsx";
import MyPage from "./components/auth/MyPage.jsx";
import Home from "./components/HomPage.jsx";

function App() {
  return (
    <>
      <Header>
        <Container style={{ minHeight: "75vh" }}>studyMonster</Container>
      </Header>
      <Routes>
        <Route path={`/boards`} element={<BoardList />} />
        <Route path={`/boards/:boardId`} element={<BoardDetail />} />
        <Route path="/auth/MyPage" element={<MyPage/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
