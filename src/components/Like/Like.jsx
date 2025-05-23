import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import {
  LikeBox,
  LikeButton,
  LikeCount,
  LikeFont,
  LikeWrapper,
} from "./styles/Like.styled";
import { addLike, getLikeCount } from "../../api/like/like_api";
import { useEffect, useState } from "react";

const Like = ({ userId, boardId }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    async function temp() {
      const data = await getLikeCount(boardId);
      setLike(data.like_count);
      setDislike(data.dislike_count);
    }
    temp();
  }, []);

  return (
    <>
      <LikeFont />
      <LikeWrapper>
        <LikeBox>
          <LikeCount>{like}</LikeCount>
          <LikeButton
            icon={faThumbsUp}
            size="2x"
            onClick={async (e) => {
              const body = {
                user_id: userId,
                board_id: boardId,
                is_dislike: 0,
              };
              const temp = await addLike(JSON.stringify(body));
              if (temp){
                setLike((d) => d+1)
              }
            }}
          />
        </LikeBox>
        <LikeBox>
          <LikeCount>{dislike}</LikeCount>
          <LikeButton
            icon={faThumbsDown}
            size="2x"
            onClick={async (e) => {
              const body = {
                user_id: userId,
                board_id: boardId,
                is_dislike: 1,
              };
              const temp = await addLike(JSON.stringify(body));
              if (temp){
                setDislike((d) => d+1)
              }
            }}
          />
        </LikeBox>
      </LikeWrapper>
    </>
  );
};

export default Like;
