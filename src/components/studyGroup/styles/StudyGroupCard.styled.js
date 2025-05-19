import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  max-width: 640px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const MetaInfo = styled.div`
  font-size: 12px;
  color: #999;
`;

export const TopDivider = styled.hr`
  border: none;
  width: 100%;

  border-top: 1px solid #dcdcdc;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const ParticipantStatus = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: -10px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusBadge = styled.span`
  background-color: ${({ status }) =>
    status === "모집완료" ? "#d3d3d3" : "#4caf50"};
  color: white;
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 999px;
  width: 55px;
  text-align: center;
`;
export const JoinButton = styled.button`
  background-color: rgb(63, 131, 101);
  color: white;
  font-size: 12px;
  border: none;
  border-radius: 999px;
  padding: 6px 13px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(9, 171, 41);
  }
`;
export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

export const BottomDivider = styled.hr`
  border: none;
  width: 100%;
  border-top: 1px solid #dcdcdc;
  margin-top: 30px;
  margin-bottom: -5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WriterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Nickname = styled.span`
  font-size: 14px;
  color: #555;
`;
