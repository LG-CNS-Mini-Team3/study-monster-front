import { useState } from "react";
import { Bell } from "lucide-react";
import {
  BellContainer,
  RedDot,
  InviteModal,
} from "./styles/BellNotification.styled.js";

const DummyInvites = [
  { id: 1, from: "홍길동", group: "알고리즘 스터디" },
  { id: 2, from: "고길동", group: "CS 스터디" },
];

const BellNotification = () => {
  const [showModal, setShowModal] = useState(false);
  const [invites, setInvites] = useState(DummyInvites);

  const toggleModal = () => setShowModal((prev) => !prev);

  const handleAccept = (id) => {
    alert("초대 수락 완료!");
    setInvites((prev) => prev.filter((invite) => invite.id == id));
  };

  const handleDecline = (id) => {
    alert("초대 거절 완료!");
    setInvites((prev) => prev.filter((invite) => invite.id !== id));
  };

  return (
    <BellContainer onClick={toggleModal}>
      <Bell />
      {invites.length > 0 && <RedDot />}
      {showModal && (
        <InviteModal>
          <h4>초대 목록</h4>
          {invites.length === 0 ? (
            <p>새로운 초대가 없습니다.</p>
          ) : (
            invites.map((invite) => (
              <div key={invite.id} style={{ marginBottom: "12px" }}>
                <p>
                  <strong>{invite.from}</strong> 님이{" "}
                  <strong>{invite.group}</strong>에 초대했어요!
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => handleAccept(invite.id)}>수락</button>
                  <button onClick={() => handleDecline(invite.id)}>거절</button>
                </div>
              </div>
            ))
          )}
        </InviteModal>
      )}
    </BellContainer>
  );
};

export default BellNotification;
