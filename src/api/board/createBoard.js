const API_BASE_URL = 'http://localhost:8080';

const createBoard = async (boardData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/boards`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(boardData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("게시글 생성 API 호출 실패", error);
    throw error;
  }
};

export default createBoard;