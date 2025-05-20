import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 100px 0 100px 350px;
  padding: 48px 64px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 40px 32px;
  }

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 3rem 0 1.5rem;
`;

export const InputRow = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const TextInput = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 200px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ddd;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: rgb(63, 131, 101);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(9, 171, 41);
  }
`;
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 24px 0;
`;
