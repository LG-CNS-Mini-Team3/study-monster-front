import React, { useEffect, useState } from "react";
import { deleteComment, updateComment } from "../../api/comment_api";
import {
  CommentBoxItemWrapper,
  CommentBoxItemName,
  CommentBoxItemTime,
  CommentBoxItemTitle,
  CommentBoxItemContent,
  CommentBoxItemIconButton,
} from "./styles/CommentItem.styled";

import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommentBoxButton, CommentBoxTextArea } from "./styles/Comment.styled";

const CommentItem = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  return (
    <CommentBoxItemWrapper id={item.id} key={item.id}user={item.userId} board={item.boardId}>
      <CommentBoxItemTitle>
          <CommentBoxItemName>{item.username}</CommentBoxItemName>
          <CommentBoxItemTime>(작성 {item.created_at} 수정 {item.created_at})</CommentBoxItemTime>
        <CommentBoxItemIconButton icon={faPenToSquare} 
            onClick={() => {
              setIsEditing(!isEditing);
              setEditedContent(item.content);
            }}
          >
        </CommentBoxItemIconButton>
        <CommentBoxItemIconButton icon={faTrash} 
          type="submit"
          onClick={(e) => {
            const li = e.currentTarget.closest("li")
            const body = {
                id: li.id,
                user_id: 1
            }
            deleteComment(JSON.stringify(body));
          }}
        >
        </CommentBoxItemIconButton>
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
                user_id: 1,
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
        <>
          
        </>
      )}
    </CommentBoxItemWrapper>
  );
};

export default CommentItem;
