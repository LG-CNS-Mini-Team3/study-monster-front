import styled from "styled-components";

export const StyledSVG = styled.svg`
  margin-right: 8px;
`;

export const SvgIcon = () => (
  <StyledSVG width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sGradientHeaderDirect" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28a745" stopOpacity="1" />
        <stop offset="100%" stopColor="#218838" stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="20" ry="20" fill="url(#sGradientHeaderDirect)" />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="65"
      fontWeight="bold"
      fill="white"
    >
      S
    </text>
  </StyledSVG>
);

export default SvgIcon;