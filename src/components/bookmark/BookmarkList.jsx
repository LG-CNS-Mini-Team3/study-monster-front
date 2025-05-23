import { useEffect, useState } from "react";
import { getBookmark } from "../../api/bookmark/bookmark_api";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const BookmarkList = ({userId}) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        async function temp() {
              // const data = await getBookmark(userId); //TODO API에러
              console.log(data)
              setBookmarks(data);
            }
            temp();
    },[])
    
    return(
        <div>
            {(bookmarks.length!=0) ? bookmarks.map((c) => (
            <BookmarkWrapper onClick = {() => {
                Navigate(`/boards/${c.id}`)
            }}>
              <BookmarkTitleRow>
                <BookmarkTitle>{c.title}</BookmarkTitle>
                <BookmarkUsername>{c.username}</BookmarkUsername>
              </BookmarkTitleRow>
              <BookmarkContent>{c.content}</BookmarkContent>
            </BookmarkWrapper>
            )) : <BookmarkWrapper>북마크가 없습니다</BookmarkWrapper>}
        </div>
    )
}

export default BookmarkList

const BookmarkWrapper = styled.div`
  padding: 16px;
  width: 320px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const BookmarkTitleRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const BookmarkTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const BookmarkUsername = styled.p`
  font-size: 0.8rem;
  color: #e0e0e0;
  margin-left: 8px;
`;

const BookmarkContent = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;