async function postCreateStudyGroup(studyData) {
  return fetch("http://localhost:8080/study-group/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studyData),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("백엔드 통신 에러");
        throw new Error("스터디 생성에 실패했습니다.");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("스터디 생성 중 오류 발생:", error);
      throw error;
    });
}

export default postCreateStudyGroup;
