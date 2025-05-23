import { Route, Routes } from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import BoardList from "./pages/board/BoardList.jsx";
import WriteBoard from "./components/board/WriteBoard.jsx";
import EditBoard from "./components/board/EditBoard.jsx";
import React from "react";
import "./App.css";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
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
      <div style={{ paddingTop: "50px" }}></div>
      <Routes>
        <Route path="/auth/MyPage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/study-groups" element={<StudyGroupList />} />
        <Route path="/study-groups/new" element={<CreateStudyGroup />} />
        <Route path={`/study-groups/:boardId`} element={<StudyGroupDetail />} />
        <Route path="/boards/new" element={<WriteBoard />} />
        <Route path={`/boards/:boardId`} element={<BoardInfo />} />
        <Route path={`/boards/:boardId/edit`} element={<EditBoard />} />
      </Routes>
    </>
  );
}

export default App;
