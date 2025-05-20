import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { createComment, listComment } from "../../api/comment_api";
import { CommentBox, CommentBoxButton, CommentBoxItem, CommentBoxTextArea, CommentBoxWrapper } from "./styles/Comment.styled";
import { useParams } from "react-router-dom";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function temp() {
      const data = await listComment(params.boardId);
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
          placeholder={"댓글을 작성해 주세요."}
        />
        <div>
          <CommentBoxButton
            type="submit"
            disabled={!comment.trim()}
            onClick={(e) => {
              e.preventDefault();
              const body = {
                user_id: 1,
                board_id: 1,
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
          />
        ))}
      </CommentBoxItem>
    </CommentBox>
  );
};

export default Comment;
