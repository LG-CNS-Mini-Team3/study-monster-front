import { useState } from 'react';
import './styles/TagInput.css';

const TagInput = ({ tags, setTags, placeholder }) => {
    const [currentTag, setCurrentTag] = useState('');
    const [tagError, setTagError] = useState('');


    const handleTagInputChange = (e) => {
        setCurrentTag(e.target.value);
        if (tagError) setTagError('');
    };

    const validateTag = (tag) => {
        const trimmedTag = tag.trim();

        if (!trimmedTag) {
            return ' ※ 태그는 비어있을 수 없습니다.';
        }

        if (trimmedTag.length > 20) {
            return ' ※ 태그는 20자 이하여야 합니다.';
        }

        const regex = /^[가-힣a-zA-Z0-9#\+\._]+$/;
        if (!regex.test(trimmedTag)) {
            return ' ※ 태그는 한글, 영문자, 숫자, 특수기호(#,+,.,_)만 포함할 수 있습니다.';
        }

        if (tags.includes(trimmedTag)) {
            return ' ※ 이미 존재하는 태그입니다.';
        }

        return '';
    };

    const addTag = () => {
        const trimmedTag = currentTag.trim();
        const error = validateTag(trimmedTag);

        if (error) {
            setTagError(error);
            return;
        }

        setTags([...tags, trimmedTag]);
        setCurrentTag('');
        setTagError('');
    };

    const handleTagInputKeyDown = (e) => {

        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            addTag();
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="form-group">
            <label htmlFor="tags">태그</label>
            <div className="tag-input-container">
                <input
                    type="text"
                    id="tags"
                    value={currentTag}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInputKeyDown}
                    placeholder={placeholder || "태그를 입력하고 Enter를 누르세요"}
                />
            </div>

            {tagError && <div className="tag-error">{tagError}</div>}

            <div className="tags-container">
                {tags.map((tag, index) => (
                    <div key={index} className="tag">
                        #{tag}
                        <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="remove-tag-button"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TagInput;