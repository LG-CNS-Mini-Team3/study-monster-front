const API_BASE_URL = "http://localhost:8080";

const postCreateStudyGroup = async (studyData) => {
  const url = `${API_BASE_URL}/study-groups`;

  const token = localStorage.getItem("accessToken");

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(studyData),
    });

    let data = null;

    if (res.headers.get("content-type")?.includes("application/json")) {
      data = await res.json();
    } else {
      const text = await res.text();
      console.warn("서버가 JSON이 아닌 응답을 보냈습니다:", text);
      data = { message: text };
    }

    return { ok: res.ok, data };
  } catch (error) {
    console.error("스터디 생성 중 오류 발생:", error);
    return { ok: false, data: null };
  }
};

export default postCreateStudyGroup;
