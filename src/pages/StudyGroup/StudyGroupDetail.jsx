import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getStudyDetail from "../../api/studyGroup/getStudyDetail";
import joinStudy from "../../api/studyGroup/joinStudy";
import usePageTitle from "../../utils/usePageTitle";
import StudyTag from "../../components/studyGroup/StudyTag";
import StudyGroupHeader from "../../components/studyGroup/StudyGroupHeader";
import {
  Wrapper,
  Description,
  TagList,
  DescriptionTitle,
  ApplyButton,
} from "./styles/StudyGroupDetail.styled";

const initData = {
  name: "",
  description: "",
  nickname: "",
  deadline: "",
  created_at: "",
  limit_members: 0,
  current: 0,
  status: "",
  tagList: [],
  userId: 1,
};

const writerImgSrc =
  "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png";

const StudyGroupDetail = () => {
  const { studyId } = useParams();
  const [study, setStudy] = useState(initData);

  usePageTitle(study.name);

  useEffect(() => {
    getStudyDetail(studyId)
      .then((data) => {
        setStudy({
          ...initData,
          ...data,
          tagList: data.tagList || [], // 빈 배열 리스트 반환 방지
        });
      })
      .catch((err) => console.error(err));
  }, [studyId]);

  return (
    <Wrapper>
      <StudyGroupHeader
        name={study.name}
        nickname={study.nickname}
        userId={study.userId}
        deadline={study.deadline}
        created_at={study.created_at}
        current={study.current}
        limit_members={study.limit_members}
        status={study.status}
        writerImgSrc={writerImgSrc}
      />
      <DescriptionTitle>스터디를 소개합니다.</DescriptionTitle>
      <Description>{study.description}</Description>

      <TagList>
        {study.tagList.map((tag, i) => (
          <StudyTag key={i} tag={tag}></StudyTag>
        ))}
      </TagList>

      <ApplyButton onClick={() => joinStudy(studyId)}>신청하기</ApplyButton>
    </Wrapper>
  );
};

export default StudyGroupDetail;
