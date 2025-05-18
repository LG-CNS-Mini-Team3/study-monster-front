import { useNavigate } from "react-router-dom";
import StudyGroupCard from "../../components/studyGroup/StudyGroupCard";
import getStudyGroupList from "../../api/studygroup/getStudyList.api";
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
              title={group.title}
              tags={group.tags}
              status={group.status}
              current={group.current}
              capacity={group.capacity}
              deadline={group.deadline}
              writer={group.writer}
            />
          ))}
        </CardList>
      </MainContainer>
    </PageWrapper>
  );
};

export default StudyGroupList;
