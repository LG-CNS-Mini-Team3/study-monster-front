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
import StudyTag from "./StudyTag";

const StudyGroupCard = ({
  studyId,
  name,
  tags = [],
  deadline,
  status,
  writer,
  current,
  limit_members,
}) => {
  const navigate = useNavigate();

  const writerImgSrc =
    "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png";

  return (
    <CardContainer onClick={() => navigate(`/study-groups/${studyId}`)}>
      <HeaderRow>
        <MetaInfo>마감일 | {deadline}</MetaInfo>
        <StatusBadge $status={status}>{status}</StatusBadge>
      </HeaderRow>

      <TopDivider />

      <CardTitle>{name}</CardTitle>

      <TagList>
        {tags.slice(0, 3).map((tag, index) => (
          <StudyTag key={tag.id || index} tag={tag} />
        ))}
        {tags.length > 3 && <span>+{tags.length - 3}개</span>}
      </TagList>

      <ParticipantStatus>
        {current} / {limit_members}명 참여중
      </ParticipantStatus>

      <BottomDivider />

      <Footer>
        <WriterSection>
          <ProfileImg src={writerImgSrc} alt="작성자" />
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
