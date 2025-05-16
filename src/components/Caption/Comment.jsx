import React, { useEffect, useState } from "react"
import { createComment, listComment } from "../../api/comment_api"

const Comment = () => {
  const [comment, setComment] = useState("")

  const [comments, setComments] = useState([])

  useEffect(() => {
    async function temp(){
        const data = await listComment(1)
        setComments(data)
    }
    temp()
  }, [])

  return (
    <div className="mt-4 border rounded-lg bg-white">
      <div className="px-4 py-2 border-b">
        <h3 className="text-lg font-semibold">댓글</h3>
      </div>
      <form method="post" action="/add" className="px-4 py-2">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={"댓글을 작성해 주세요."}
          className="w-full h-20 p-2 border rounded resize-none focus:outline-none focus:ring"
        />
        <div className="mt-2 text-right">
          <button
            type="submit"
            disabled={!comment.trim()}
            className={`px-4 py-1 rounded 
              ${
                comment.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            onClick={(e) => {
              e.preventDefault();
              const body = {
                content: comment,
              };
              createComment(JSON.stringify(body));
            }}
          >
            등록
          </button>
        </div>
      </form>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <h3>{c.username}</h3>
            <p>작성일시: {c.created_at}</p>
            <p>수정일시: {c.updated_at}</p>
            <p>{c.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
