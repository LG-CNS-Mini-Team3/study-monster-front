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
  title,
  tags,
  deadline,
  status,
  writer,
  current,
  capacity,
}) => {
  return (
    <CardContainer>
      <HeaderRow>
        <MetaInfo>마감일 | {deadline}</MetaInfo>
        <StatusBadge status={status}>{status}</StatusBadge>
      </HeaderRow>

      <TopDivider />

      <CardTitle>{title}</CardTitle>

      <TagList>
        {tags.map((tag, index) => (
          <TagBadge key={index} tag={tag} />
        ))}
      </TagList>
      <ParticipantStatus>
        {current} / {capacity}명 참여중
      </ParticipantStatus>

      <BottomDivider />

      <Footer>
        <WriterSection>
          <ProfileImg src={writer.profileImage} alt="작성자" />
          <Nickname>{writer.nickname}</Nickname>
        </WriterSection>
        <JoinButton onClick={() => console.log("스터디 신청")}>신청</JoinButton>
      </Footer>
    </CardContainer>
  );
};

export default StudyGroupCard;
