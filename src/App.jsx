import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/StudyGroup/StudyGroupList";

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
