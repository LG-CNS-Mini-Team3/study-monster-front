import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled, {createGlobalStyle} from "styled-components"

export const LikeButton = styled(FontAwesomeIcon)`
 color: #a0a0a0;
 margin-left: 8px;
 cursor: pointer;
 transition: color 0.2s ease;

 &:hover {
   color: #1E3050;
 }
`

export const LikeWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px auto;

`

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

export const LikeCount = styled.div`
  font-size: 2rem;
  font-family: 'MapleBold', sans-serif;
  font-weight: normal;
  src: url("src/fonts/Maplestory-Bold.ttf") format("truetype");
`

export const LikeFont = createGlobalStyle`
    @font-face {
        font-family: 'MapleBold';
        src: url('/src/assets/fonts/Maple-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;