import { useState, useEffect } from 'react';
import TagInput from '../common/TagInput';
import './styles/BoardForm.css';

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
    <div className="board-form-container">
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="board-form">
        <div className="form-group">
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
            maxLength={100}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="내용을 입력하세요"
            rows={20}
            required
          />
        </div>

        <TagInput 
          tags={tags} 
          setTags={setTags}
          placeholder="태그를 입력하고 Enter를 누르세요" 
        />

        <div className="form-actions">
          <button
            type="button"
            onClick={cancelAction}
            className="cancel-button"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? '처리 중...' : submitButtonText || '저장'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardForm;