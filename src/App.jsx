import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import Header from "./components/header/Header.jsx";
import MyPage from "./components/auth/MyPage.jsx";
import { Container } from "react-bootstrap";
import Home from "./components/HomPage.jsx";
function App() {
  return (
    <>
      <Header>
        <Container style={{ minHeight: "75vh" }}>studyMonster</Container>
      </Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth/MyPage" element={<MyPage/>} />
        <Route path="/study-group" element={<StudyGroupList />} />
        <Route path="/study-group/create" element={<CreateStudyGroup />} />
        <Route path="/study-group/detail" element={<StudyGroupDetail />} />
        <Route path={`/board/:boardId`} element={<BoardInfo />} />
        <Route path="/board/create" element={<WriteBoard />} />
      </Routes>
    </>
  );
}

export default App;
