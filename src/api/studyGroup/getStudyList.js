async function getStudyGroupList() {
  return fetch("http://localhost:8080/study-groups") // 포트 확인!
    .then((response) => {
      if (!response.ok) {
        console.log("백엔드 통신 에러");
        throw new Error("백엔드 통신 에러");
      }
      return response.json();
    });
}

export default getStudyGroupList;
