import { Routes, Route } from "react-router-dom";
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path={`/boards`} element={<BoardList />} />
        <Route path={`/boards/:boardId`} element={<BoardDetail />} />
      </Routes>
    </>
  );
}

export default App;
