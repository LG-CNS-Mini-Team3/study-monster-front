const API_BASE_URL = 'http://localhost:8080';

const token = localStorage.getItem("accessToken");

const updateBoard = async (boardId, boardData) => {
     console.log('updateBoard 호출 - boardId:', boardId, 'type:', typeof boardId);
  try {
    const response = await fetch(`${API_BASE_URL}/boards/${boardId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(boardData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("게시글 수정 API 호출 실패", error);
    throw error;
  }
};

export default updateBoard;