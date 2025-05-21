import { useNavigate } from "react-router-dom";
import { formatDateTime, getDday } from "../../utils/DateTimeUtil"; // 작성일 포맷 유틸
import {
  HeaderWrapper,
  HeaderInfo,
  Title,
  SubInfo,
  Writer,
  ProfileImg,
  Text,
  StatusBadge,
} from "./styles/StudyGroupHeader.styled";

const StudyGroupHeader = ({
  name,
  nickname,
  userId,
  deadline,
  created_at,
  current,
  limit_members,
  status,
  writerImgSrc,
}) => {
  const navigate = useNavigate();

  const onClickWriterProfile = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <HeaderWrapper>
      <HeaderInfo>
        <Title>{name}</Title>
        <SubInfo>
          <Writer onClick={onClickWriterProfile}>
            <ProfileImg src={writerImgSrc} />
            {nickname}
          </Writer>
          |
          <Text>
            {formatDateTime(created_at)}({getDday(deadline)}) {deadline}
          </Text>
          |
          <Text>
            인원: {current} / {limit_members}
          </Text>
          | <StatusBadge $status={status}>{status}</StatusBadge>
        </SubInfo>
      </HeaderInfo>
    </HeaderWrapper>
  );
};

export default StudyGroupHeader;
