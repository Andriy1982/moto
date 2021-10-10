import styled from 'styled-components';

export const ProfilePageStyle = styled.div`
  color: ${({theme}) => theme.text.default};
  border-radius: 10px;
  overflow: hidden;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 40px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    border-radius: 0;
    padding-bottom: 85px;
  } ;
`;

export const TopSection = styled.div<{img: any}>`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 61.5%, #28292b 89.05%),
    linear-gradient(180deg, rgba(40, 40, 42, 0.71) 0%, rgba(255, 255, 255, 0) 100%),
    url(${({img}) => img}) no-repeat center / cover;
  padding-top: 105px;
`;
export const ItemContainer = styled.div`
  border-radius: 10px;
  background-color: ${({theme}) => theme.background.dark};
  padding: 12px;
  & h3 {
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${({theme}) => theme.text.gray};
  }
`;

export const Garage = styled.div`
  & > div {
    border-bottom: 1px solid ${({theme}) => theme.border.dark};
  }
  & > div:last-child {
    border-bottom: none;
  }
`;

export const Status = styled.div`
  padding: 10px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({theme}) => theme.background.default};
  border: 2px solid ${({theme}) => theme.border.gray};
  margin: 0 auto;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 0;
  gap: 20px;

  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding: 20px 16px 0;
  } ;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  text-align: center;
`;

export const Location = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContactIcons = styled.div`
  display: flex;
  gap: 45px;
  padding: 10px 0;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    gap: 30px;
  }
  ${({theme}) => theme.mediaQueriesMax.xs} {
    gap: 20px;
  }
`;

export const City = styled.div`
  font-size: 18px;
  line-height: 140%;
  color: ${({theme}) => theme.text.gray};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.background.dark};
  padding: 10px;
  flex-shrink: 0;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 36px;
  min-width: 40%;
  max-width: 100%;
  & > div {
    align-self: start;
  }
  & > div:last-child {
    flex: 1 1 60%;
  }
  & > div:first-child {
    flex: 1 1 40%;
  }
`;

export const StatusContainer = styled.div`
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: none;
  } ;
`;
