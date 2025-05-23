const getStudyDetail = async (studyId) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `http://localhost:8080/study-groups/${studyId}`,
      {
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("스터디 상세 조회 실패:", errorText);
      throw new Error("스터디 상세 조회 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("네트워크 오류 또는 서버 응답 오류:", error);
    throw error;
  }
};

export default getStudyDetail;
