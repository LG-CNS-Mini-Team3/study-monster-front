import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudyGroupList from "./pages/StudyGroup/StudyGroupList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/study-group" element={<StudyGroupList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
