import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StudyGroupCard from "../../components/studyGroup/StudyGroupCard";
import getStudyGroupList from "../../api/studyGroup/getStudyList";
import {
  PageWrapper,
  MainContainer,
  HeaderSection,
  PageTitle,
  CreateButton,
  CardList,
} from "./styles/StudyGroupList.styled";

// const dummyStudyGroups = [
//   {
//     id: 1,
//     title: "알고리즘 스터디",
//     tags: ["Java", "코딩테스트"],
//     deadline: "2025.06.10",
//     status: "모집중",
//     current: 3,
//     capacity: 5,
//     writer: {
//       nickname: "지영",
//       profileImage: "/assets/profile-default.png",
//     },
//   },
// ];

const StudyGroupList = () => {
  const navigate = useNavigate();

  const [studyGroups, setStudyGroups] = useState([]);

  useEffect(() => {
    getStudyGroupList()
      .then((data) => {
        setStudyGroups(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageWrapper>
      <MainContainer>
        <HeaderSection>
          <PageTitle>스터디 그룹 모집</PageTitle>
          <CreateButton onClick={() => navigate("/study-group/create")}>
            스터디 만들기
          </CreateButton>
        </HeaderSection>

        <CardList>
          {studyGroups.map((group) => (
            <StudyGroupCard
              key={group.id}
              name={group.name}
              tags={group.tags}
              status={group.status}
              current={group.current}
              limit_members={group.limit_members}
              deadline={group.deadline}
              writer={{
                nickname: group.nickname,
                profileImage: group.profileImage,
              }}
            />
          ))}
        </CardList>
      </MainContainer>
    </PageWrapper>
  );
};

export default StudyGroupList;
