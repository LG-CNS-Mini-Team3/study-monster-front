const API_BASE_URL = "http://localhost:8080";

const postCreateStudyGroup = async (studyData) => {
  const url = `${API_BASE_URL}/study-group/create?userId=1`; //테스트용 url

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studyData),
    });

    const data = await res.json();
    return { ok: res.ok, data };
  } catch (error) {
    console.error("스터디 생성 중 오류 발생:", error);
    return { ok: false, data: null };
  }
};

export default postCreateStudyGroup;
