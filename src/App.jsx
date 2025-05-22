
import { Route, Routes } from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import BoardList from "./pages/board/BoardList.jsx";
import WriteBoard from "./components/board/WriteBoard.jsx";
import EditBoard from "./components/board/EditBoard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/study-groups" element={<StudyGroupList />} />
        <Route path="/study-groups/new" element={<CreateStudyGroup />} />
        <Route path={`/study-groups/:studyId`} element={<StudyGroupDetail />} />
        <Route path={`/boards/:boardId`} element={<BoardInfo />} />
        <Route path="/boards/create" element={<WriteBoard />} />
        <Route path={`/boards/:boardId/update`} element={<EditBoard />} />
      </Routes>
    </>
  );
}

export default App;
