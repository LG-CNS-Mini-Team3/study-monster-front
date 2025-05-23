import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { createComment, listComment } from "../../api/comment/comment_api";
import { CommentBox, CommentBoxButton, CommentBoxItem, CommentBoxTextArea, CommentBoxWrapper } from "./styles/Comment.styled";
import { useParams } from "react-router-dom";

const Comment = ({userId, boardId}) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function temp() {
      const data = await listComment(boardId);
      setComments(data);
    }
    temp();
  }, []);

  return (
    <CommentBox>
      <CommentBoxWrapper method="post" action="/add">
        <CommentBoxTextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={userId==""?"먼저 로그인이 필요합니다":"댓글을 작성해 주세요."}
          disabled={userId==""?true:false}
        />
        <div>
          <CommentBoxButton
            type="submit"
            disabled={!comment.trim()}
            onClick={(e) => {
              e.preventDefault();
              const body = {
                user_id: userId,
                board_id: boardId,
                content: comment,
              };
              createComment(JSON.stringify(body));
            }}
          >
            등록
          </CommentBoxButton>
        </div>
      </CommentBoxWrapper>
      <CommentBoxItem>
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            item = {c}
            userId = {userId}
          />
        ))}
      </CommentBoxItem>
    </CommentBox>
  );
};

export default Comment;
