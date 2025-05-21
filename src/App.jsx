import { Route, Routes } from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import BoardList from "./pages/board/BoardList.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={`/boards`} element={<BoardList />} />
                <Route path={`/boards/:boardId`} element={<BoardInfo />} />
            </Routes>
        </>
    )
}

export default App;
