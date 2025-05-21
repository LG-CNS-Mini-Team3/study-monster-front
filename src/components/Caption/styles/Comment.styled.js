import styled from "styled-components"

export const CommentBox = styled.div`
  width: 720px;
  margin: 10px auto;
`

export const CommentBoxWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  margin-bottom: 20px;
`

export const CommentBoxButton = styled.button`
  background: #e0e0e0;
  width: 60px;
  margin-left: 8px;
  border: none;
  color: wite;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  flex-grow: 1;
  font-size: 0.8rem;
  transition: background 0.2s ease;

  &:hover {
  background: #a0a0a0;
  }
`

export const CommentBoxTextArea = styled.textarea`
  width: 600px;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  resize: none;
`

export const CommentBoxItem = styled.ul`
  margin: 0;
  padding: 0;

`