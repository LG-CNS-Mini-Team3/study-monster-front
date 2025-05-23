import axios from "axios";

const CommentDelete = ({ commentId, userId, isAdmin, isAuthor, onDeleteSuccess }) => {
    const handleDelete = async () => {
        const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
        if (!confirmDelete) return;

        try {
            await axios.post("http://localhost:8080/comments/delete", {
                commentId,
                userId,
            });

            alert("댓글이 삭제되었습니다.");
            onDeleteSuccess(commentId);
        } catch (error) {
            console.error("댓글 삭제 실패:", error);
            alert("삭제 권한이 없습니다.");
        }
    };

    if (!isAdmin && !isAuthor) return null;

    return (
        <button onClick={handleDelete} style={{ marginLeft: "10px", color: "gray" }}>
            삭제
        </button>
    );
};

export default CommentDelete;
