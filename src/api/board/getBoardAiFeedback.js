const token = localStorage.getItem("accessToken");

async function getBoardAiFeedback(boardId) {
    return fetch(`http://127.0.0.1:8080/boards/${boardId}/feedback`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
        .then((response) => {
            if (!response.ok) {
                console.log("백엔드 통신 에러");
                throw new Error('백엔드 통신 에러');
            }
            return response.json();
        })
}

export default getBoardAiFeedback;