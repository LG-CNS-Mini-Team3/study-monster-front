import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import { Container } from "lucide-react";
import Header from "./components/header/Header.jsx";
import MyPage from "./components/auth/MyPage.jsx";
import Home from "./components/HomPage.jsx";
import EditBoard from "./components/board/EditBoard.jsx";
import WriteBoard from "./components/board/WriteBoard.jsx";
import BoardList from "./pages/board/BoardList";

function App() {
  return (
    <>
      <Header>
        <Container style={{ minHeight: "75vh" }}>studyMonster</Container>
      </Header>
      <div style={{ paddingTop: "50px" }}></div>
      <Routes>
        <Route path="/auth/MyPage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/study-groups" element={<StudyGroupList />} />
        <Route path="/study-groups/new" element={<CreateStudyGroup />} />
        <Route path={`/study-groups/:studyId`} element={<StudyGroupDetail />} />
        <Route path="/boards/new" element={<WriteBoard />} />
        <Route path={`/boards`} element={<BoardList />} />{" "}
        <Route path={`/boards/:boardId`} element={<BoardInfo />} />
        <Route path={`/boards/:boardId/update`} element={<EditBoard />} />
      </Routes>
    </>
  );
}

export default App;
