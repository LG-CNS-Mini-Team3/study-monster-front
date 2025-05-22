async function getBoardInfo(boardId) {
  console.log(boardId);
  return fetch(`http://127.0.0.1:8080/boards/${boardId}`).then((response) => {
    if (!response.ok) {
      console.log("백엔드 통신 에러");
      throw new Error("백엔드 통신 에러");
    }
    return response.json();
  });
}

export default getBoardInfo;
