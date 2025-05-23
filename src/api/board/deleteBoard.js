const API_BASE_URL = 'http://localhost:8080';

const token = localStorage.getItem("accessToken");

const deleteBoard = async (boardId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/boards/${boardId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error("게시글 삭제 API 호출 실패", error);
    throw error;
  }
};

export default deleteBoard;