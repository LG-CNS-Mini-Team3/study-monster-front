import { useState, useEffect } from 'react';
import TagInput from '../common/TagInput';
import {
  FormContainer,
  Form,
  TitleInput,
  FormGroup,
  Label,
  TextArea,
  FormActions,
  CancelButton,
  SubmitButton,
  ErrorMessage
} from './styles/BoardForm.styled';

const BoardForm = ({ 
  initialData, 
  onSubmit, 
  isSubmitting, 
  error, 
  submitButtonText,
  cancelAction 
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  // initialData가 있으면 폼 데이터 초기화 (수정 모드)
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
      setTags(initialData.tags || []);
    }
  }, [initialData]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return '제목을 입력해주세요.';
    }

    if (!content.trim()) {
      return '내용을 입력해주세요.';
    }

    const formData = {
      title,
      content,
      tags
    };

    onSubmit(formData);
  };

  return (
    <FormContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <TitleInput
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
            maxLength={100}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="content">내용</Label>
          <TextArea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
            rows={20}
            required
          />
        </FormGroup>

        <TagInput 
          tags={tags} 
          setTags={setTags}
          placeholder="해시태그를 입력하고 Enter를 누르세요" 
        />

        <FormActions>
          <CancelButton
            type="button"
            onClick={cancelAction}
          >
            취소
          </CancelButton>
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? '처리 중...' : submitButtonText || '저장'}
          </SubmitButton>
        </FormActions>
      </Form>
    </FormContainer>
  );
};

export default BoardForm;