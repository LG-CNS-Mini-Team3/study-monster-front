import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardDelete = ({ boardId, userId, isAdmin, isAuthor }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("정말 이 게시글을 삭제하시겠습니까?");
        if (!confirmDelete) return;

        try {
            await axios.post("http://localhost:8080/boards/delete", {
                boardId,
                userId
            });
            alert("게시글이 삭제되었습니다.");
            navigate("/boards/list");
        } catch (err) {
            console.error("게시글 삭제 오류:", err);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    if (!isAdmin && !isAuthor) return null;

    return (
        <button onClick={handleDelete} style={{ color: 'red', margin: '10px 0' }}>
            게시글 삭제
        </button>
    );
};

export default BoardDelete;
