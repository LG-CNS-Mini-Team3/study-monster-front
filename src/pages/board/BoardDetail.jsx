import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BoardDelete from "../../components/admin/BoardDelete";
import CommentDelete from "../../components/admin/CommentDelete";

const BoardDetail = () => {
    const { boardId } = useParams();
    const navigate = useNavigate();

    const [board, setBoard] = useState(null);
    const [comments, setComments] = useState([]);

    // 임시 로그인 사용자 정보 (userId와 role을 하드코딩)
    const currentUser = {
        userId: 7,             // 테스트용 관리자자 ID
        role: "ADMIN"          // "ADMIN" 또는 "USER"
    };

    const isAdmin = currentUser.role === "ADMIN";

    useEffect(() => {
        axios.get(`http://localhost:8080/boards/${boardId}`)
            .then(res => setBoard(res.data))
            .catch(() => alert("게시글을 불러오는 데 실패했습니다."));

        // 임시 댓글 더미 데이터
        const dummyComments = [
            { id: 101, content: "첫 번째 댓글입니다.", userId: 2, nickname: "user2" },
            { id: 102, content: "두 번째 댓글입니다.", userId: 1, nickname: "관리자" }
        ];
        setComments(dummyComments);
    }, [boardId]);

    const handleDeleteCommentSuccess = (commentId) => {
        setComments(prev => prev.filter(c => c.id !== commentId));
    };

    if (!board) return <p>로딩 중...</p>;

    const isAuthor = board.userId === currentUser.userId;

    return (
        <div style={{ padding: "20px" }}>
            <h2>{board.title}</h2>
            <p><strong>작성자:</strong> {board.nickname}</p>
            <p><strong>작성일:</strong> {new Date(board.created_at).toLocaleString()}</p>
            <p>{board.content}</p>

            <BoardDelete
                boardId={board.id}
                userId={7} // 임시 -> currentUser.userId
                isAdmin={true} // isAdmin
                // isAuthor={isAuthor}
            />

            <hr />

            <h4>댓글</h4>
            <ul>
                {comments.map(comment => {
                    const isCommentAuthor = comment.userId === currentUser.userId;
                    return (
                        <li key={comment.id} style={{ marginBottom: "12px" }}>
                            <p><strong>{comment.nickname}</strong>: {comment.content}</p>

                            <CommentDelete
                                commentId={comment.id}
                                userId={currentUser.userId}
                                isAdmin={isAdmin}
                                isAuthor={isCommentAuthor}
                                onDeleteSuccess={handleDeleteCommentSuccess}
                            />
                        </li>
                    );
                })}
            </ul>

            <button onClick={() => navigate("/boards")} style={{ marginTop: "20px" }}>
                목록
            </button>
        </div>
    );
};

export default BoardDetail;
