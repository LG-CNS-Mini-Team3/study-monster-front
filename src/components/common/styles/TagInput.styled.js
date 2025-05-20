import styled from 'styled-components';

export const TagFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const TagInputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 16px;
  background-color: #f2f2f3;
  font-size: 14px;
  color: #20851f;
`;

export const RemoveTagButton = styled.button`
  background: none;
  border: none;
  color: #f44336;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagError = styled.div`
  color: rgb(113, 113, 113);
`;