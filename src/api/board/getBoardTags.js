const API_BASE_URL = 'http://localhost:8080';

const getBoardTags = async (boardId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/boards/${boardId}/tags`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("게시글 태그 조회 API 호출 실패", error);
    throw error;
  }
};

export default getBoardTags;