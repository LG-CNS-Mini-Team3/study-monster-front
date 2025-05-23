import React, { useEffect, useState } from "react";
import { deleteComment, updateComment } from "../../api/comment/comment_api";
import {
  CommentBoxItemWrapper,
  CommentBoxItemName,
  CommentBoxItemTime,
  CommentBoxItemTitle,
  CommentBoxItemContent,
  CommentBoxItemIconButton,
} from "./styles/CommentItem.styled";

import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CommentBoxButton, CommentBoxTextArea } from "./styles/Comment.styled";

const CommentItem = ({ userId, item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  return (
    <CommentBoxItemWrapper
      id={item.id}
      key={item.id}
      user={item.user_id}
      board={item.board_id}
    >
      <CommentBoxItemTitle>
        <CommentBoxItemName>{item.username}</CommentBoxItemName>
        <CommentBoxItemTime>
          (작성 {item.created_at} 수정 {item.created_at})
        </CommentBoxItemTime>
        <CommentBoxItemIconButton
          icon={faPenToSquare}
          onClick={() => {
            console.log(item.user_id, userId);
            if (userId != item.user_id) {
              alert("작성자가 다릅니다.");
              return;
            }
            setIsEditing(!isEditing);
            setEditedContent(item.content);
          }}
        ></CommentBoxItemIconButton>
        <CommentBoxItemIconButton
          icon={faTrash}
          type="submit"
          onClick={(e) => {
            if (userId != item.userId) {
              alert("작성자가 다릅니다.");
              return;
            }
            const li = e.currentTarget.closest("li");
            const body = {
              id: li.id,
              user_id: userId,
            };
            deleteComment(JSON.stringify(body));
          }}
        ></CommentBoxItemIconButton>
      </CommentBoxItemTitle>
      <CommentBoxItemContent>{item.content}</CommentBoxItemContent>
      {isEditing ? (
        <>
          <CommentBoxTextArea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            rows={3}
            cols={50}
          />
          <br />
          <CommentBoxButton
            onClick={() => {
              const body = {
                id: item.id,
                user_id: userId,
                content: editedContent,
              };
              updateComment(JSON.stringify(body));
            }}
          >
            확인
          </CommentBoxButton>
          <CommentBoxButton onClick={() => setIsEditing(false)}>
            취소
          </CommentBoxButton>
        </>
      ) : (
        <></>
      )}
    </CommentBoxItemWrapper>
  );
};

export default CommentItem;
