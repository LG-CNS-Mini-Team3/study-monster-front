const getStudyList = async () => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch("http://localhost:8080/study-groups", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error("스터디 목록 조회 실패: " + msg);
  }

  return await res.json();
};

export default getStudyList;
