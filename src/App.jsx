import { Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGrou";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
import BoardInfo from "./pages/board/BoardInfo.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/study-group" element={<StudyGroupList />} />
        <Route path="/study-group/create" element={<CreateStudyGroup />} />
        <Route path="/study-group/detail" element={<StudyGroupDetail />} />
        <Route path={`/board/:boardId`} element={<BoardInfo />} />
      </Routes>
    </>
  );
}

export default App;
