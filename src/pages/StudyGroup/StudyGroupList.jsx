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
              tags={group.tagList}
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
