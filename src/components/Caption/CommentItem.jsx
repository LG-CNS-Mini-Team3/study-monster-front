import React, { useEffect, useState } from "react";
import { deleteComment, updateComment } from "../../api/comment_api";

const CommentItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  return (
    <li id={item.id} key={item.id}>
      <h3>{item.username}</h3>
      <small>작성일시: {item.created_at}</small>
      <small>수정일시: {item.updated_at}</small>
      <p>{item.content}</p>
      {isEditing ? (
        <>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={3}
            cols={50}
          />
          <br />
          <button onClick={() => {
            const body = {
                id: item.id,
                content: editedContent
            }
            updateComment(JSON.stringify(body))
          }}>확인</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <button onClick={
            () => {
                setIsEditing(true)
                setEditedContent(item.content)
            }
            }>수정</button>
        </>
      )}
      <div></div>
      <button
        type="submit"
        onClick={(e) => {
          deleteComment(e.currentTarget.closest("li").id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default CommentItem;
