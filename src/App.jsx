import {Route, Routes} from "react-router-dom";
import BoardInfo from "./pages/board/BoardInfo.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={`/board/:boardId`} element={<BoardInfo/>}/>
            </Routes>
        </>
    )
}

export default App
