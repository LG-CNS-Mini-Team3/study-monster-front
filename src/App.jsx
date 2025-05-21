import { Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";
import BoardInfo from "./pages/board/BoardInfo.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/study-groups" element={<StudyGroupList />} />
        <Route path="/study-groups/new" element={<CreateStudyGroup />} />
        <Route path={`/study-groups/:studyId`} element={<StudyGroupDetail />} />
        <Route path={`/boards/:boardId`} element={<BoardInfo />} />
      </Routes>
    </>
  );
}

export default App;
