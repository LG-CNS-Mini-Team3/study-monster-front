import {Route, Routes} from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";
import WriteBoard from "./components/board/WriteBoard.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={`/board/:boardId`} element={<BoardInfo/>}/>
                <Route path="/board/create" element={<WriteBoard />}/>
            </Routes>
        </>
    )
}

export default App
