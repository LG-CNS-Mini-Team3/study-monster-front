import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const CommentBoxItemWrapper = styled.li`
  list-style-type: none;
  width: 640px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 0px 16px 16px 16px;
  margin-bottom: 10px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`

export const CommentBoxItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CommentBoxItemName = styled.h2`
  margin-left: -10px;
  padding: 0;
  font-size: 1.2rem;
  font-weight: bold;
  flex-grow: 0.5;
`

export const CommentBoxItemTime = styled.div`
  font-size: 0.8rem;
  color: #e0e0e0;
  flex-grow: 2.5;
  text-align: left;
`

export const CommentBoxItemIconButton = styled(FontAwesomeIcon)`
 color: #a0a0a0;
 margin-left: 8px;
 cursor: pointer;
 transition: color 0.2s ease;

 &:hover {
   color: #1E3050;
 }
`

export const CommentBoxItemContent = styled.div`
  font-size: 1.0rem;
  text-align: left;
  padding-left: 10px;
`