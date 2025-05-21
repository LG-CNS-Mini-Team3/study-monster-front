const joinStudy = async (studyId, userId = 1) => {
  try {
    const res = await fetch(
      `http://localhost:8080/study-groups/${studyId}/join?userId=${userId}`,
      { method: "POST" }
    );

    if (!res.ok) throw new Error("신청 실패");
    const msg = await res.text();
    alert(msg || "신청이 완료되었습니다!");
  } catch (err) {
    console.error("스터디 신청 오류:", err);
    alert("신청 중 문제가 발생했습니다.");
  }
};

export default joinStudy;
