import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { addBookmark, checkBookmark, removeBookmark } from "../../api/bookmark/bookmark_api";

const BookmarkButton = ({ boardId, userId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const body = {
    board_id: boardId,
    user_id: userId
  }

  useEffect(() => {
    const temp = async() => {
      // 로그인 여부 판단
      if (!userId) return;

      const res = await checkBookmark(body);
      setIsBookmarked(res)
    }
    temp()
    
  }, [boardId, userId]);

  const toggleBookmark = async () => {
    if (!userId) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const curBookmark = isBookmarked ? 
        removeBookmark(body) : addBookmark(body)
      if (curBookmark){
        setIsBookmarked(!isBookmarked);
      }
    } catch (err) {
      console.error("북마크 토글 오류:", err);
    }
  };

  return (
    <button onClick={toggleBookmark} style={{ background: "none", border: "none", cursor: "pointer" }}>
      <FontAwesomeIcon
        icon={isBookmarked ? solidBookmark : regularBookmark}
        color={isBookmarked ? "#f4c10f" : "#aaa"}
        size="lg"
      />
    </button>
  );
};

export default BookmarkButton;
