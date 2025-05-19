import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postCreateStudyGroup from "../../api/studyGroup/postCreateStudyGroup";
import {
  Wrapper,
  SectionTitle,
  InputRow,
  TextInput,
  TextArea,
  ButtonRow,
  CancelButton,
  SubmitButton,
  Divider,
} from "./styles/CreateStudyGroup.styled";

const CreateStudyGroup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [limit_members, setlimit_members] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  // const [tags, setTags] = useState([]);
  // const [inputTag, setInputTag] = useState("");

  //  const handleAddTag = () => {
  //    todo : 태그 입력 추후 구현
  //  }

  const handleSubmit = async () => {
    const newStudyData = {
      name,
      description,
      limit_members,
      deadline,
      Nickname: "테스트",
      // tags,
    };

    const { ok, data } = await postCreateStudyGroup(newStudyData);

    if (ok) {
      alert("스터디가 성공적으로 등록되었습니다!");
      navigate("/study-group");
    } else {
      alert("스터디 등록에 실패했습니다.");
      console.error("응답 데이터:", data);
    }
  };

  return (
    <Wrapper>
      <SectionTitle>1. 프로젝트 기본 정보를 입력해 주세요.</SectionTitle>
      <Divider />
      <InputRow>
        <label>모집 인원</label>
        <TextInput
          type="number"
          value={limit_members}
          onChange={(e) => setlimit_members(e.target.value)}
          placeholder="예: 5"
        />
      </InputRow>
      <InputRow>
        <label>모집 마감일</label>
        <TextInput
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </InputRow>
      <InputRow>
        <label>키워드 (해시태그)</label>
        <TextInput
          type="text"
          placeholder="#자바, #리액트 등 쉼표로 구분해주세요"
          disabled // 임시 비활성화
        />
        <small style={{ color: "gray" }}>todo : 해시태그 구현</small>
      </InputRow>

      <SectionTitle>2. 프로젝트에 대해 소개해주세요.</SectionTitle>
      <Divider />
      <InputRow>
        <label>스터디 제목</label>
        <TextInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="예: 리액트 마스터 스터디"
        />
      </InputRow>

      <InputRow>
        <label>소개글</label>
        <TextArea
          rows={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="스터디를 자유롭게 소개해주세요."
        />
      </InputRow>

      <ButtonRow>
        <CancelButton onClick={() => navigate(-1)}>취소</CancelButton>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </ButtonRow>
    </Wrapper>
  );
};

export default CreateStudyGroup;
