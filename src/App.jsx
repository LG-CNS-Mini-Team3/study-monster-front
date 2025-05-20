import Comment from './components/Caption/Comment';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path="board/:boardId" element={<Comment/>} />
    </Routes>
    </>
  )
}

export default App
