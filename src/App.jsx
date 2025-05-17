import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/studyGroup/StudyGroupList";
import CreateStudyGroup from "./pages/studyGroup/CreateStudyGroup";
import StudyGroupDetail from "./pages/studyGroup/StudyGroupDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/study-group" element={<StudyGroupList />} />
        <Route path="/study-group/create" element={<CreateStudyGroup />} />
        <Route path="/study-group/:id" element={<StudyGroupDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
