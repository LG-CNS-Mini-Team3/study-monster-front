import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  MetaInfo,
  StatusBadge,
  TopDivider,
  CardTitle,
  TagList,
  ParticipantStatus,
  BottomDivider,
  Footer,
  ProfileImg,
  Nickname,
  HeaderRow,
  JoinButton,
  WriterSection,
} from "./styles/StudyGroupCard.styled";
import TagBadge from "./TagBadge";

const StudyGroupCard = ({
  name,
  tagList = [],
  deadline,
  status,
  writer,
  current,
  limit_members,
}) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/study-group/detail`)}>
      <HeaderRow>
        <MetaInfo>마감일 | {deadline}</MetaInfo>
        <StatusBadge $status={status}>{status}</StatusBadge>
      </HeaderRow>

      <TopDivider />

      <CardTitle>{name}</CardTitle>

      <TagList>
        {tagList.map((tag, index) => (
          <TagBadge key={tag.id || index} tag={tag} />
        ))}
      </TagList>

      <ParticipantStatus>
        {current} / {limit_members}명 참여중
      </ParticipantStatus>

      <BottomDivider />

      <Footer>
        <WriterSection>
          <ProfileImg src={`images/${writer.profileImage}`} alt="작성자" />
          {/* 프로필사진 추후 수정 */}
          <Nickname>{writer.nickname}</Nickname>
        </WriterSection>
        <JoinButton
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭 이벤트 막기
            const confirmed = window.confirm("신청하시겠습니까?");
            if (confirmed) {
              alert("신청되었습니다.");
              // TODO: 신청 처리 로직 추가
            }
          }}
        >
          신청
        </JoinButton>
      </Footer>
    </CardContainer>
  );
};

export default StudyGroupCard;
