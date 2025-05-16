import React from "react";
import StudyGroupCard from "./StudyGroupCard";
import { ListContainer } from "./StudyGroupList.styled";

const dummyStudyGroups = [
  {
    id: 1,
    title: "알고리즘 스터디",
    tags: ["Java", "코딩테스트"],
    deadline: "2025.06.10",
    status: "모집중",
    current: 3,
    capacity: 5,
    writer: {
      nickname: "지영",
      profileImage: "/assets/profile-default.png",
    },
  },
];

const StudyGroupList = () => {
  return (
    <ListContainer>
      {dummyStudyGroups.map((group) => (
        <StudyGroupCard
          key={group.id}
          title={group.title}
          tags={group.tags}
          status={group.status}
          current={group.current}
          capacity={group.capacity}
          deadline={group.deadline}
          writer={group.writer}
        />
      ))}
    </ListContainer>
  );
};

export default StudyGroupList;
