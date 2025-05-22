const joinStudy = async (studyId, userId = 1) => {
  try {
    const res = await fetch(
      `http://localhost:8080/study-groups/${studyId}/join?userId=${userId}`,
      { method: "POST" }
    );

    const msg = await res.text();

    if (!res.ok) {
      if (msg.includes("이미 신청한 유저입니다.")) {
        alert("이미 신청한 스터디입니다.");
      }
      return;
    }

    alert(msg || "신청이 완료되었습니다!");
    window.location.reload();
  } catch (err) {
    console.error("스터디 신청 오류:", err);
    alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요. ");
  }
};

export default joinStudy;
