import styled from 'styled-components';
import {motion} from 'framer-motion';

export const EventPageStyle = styled.div`
  color: ${({theme}) => theme.text.default};
  border-radius: 10px;
  overflow: hidden;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 40px;
  ${({theme}) => theme.mediaQueriesMax.md} {
    padding-bottom: 16px;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding-bottom: 85px;
  }
`;

export const TopSection = styled.div`
  background: linear-gradient(0deg, #28292b 9.97%, rgba(40, 41, 43, 0) 45.98%),
    linear-gradient(180deg, #28292b -52.15%, rgba(255, 255, 255, 0) 100%),
    url('/assets/images/sos_detail.jpg') no-repeat center / cover;
  padding: 40px 40px 0 40px;
  min-height: 300px;
  & h1 {
    padding-top: 60px;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    ${({theme}) => theme.mediaQueriesMax.sm} {
      width: 40%;
      padding-top: 0;
      font-size: 28px;
      line-height: 34px;
    }
  }
`;
export const Moto = styled.img`
  padding-top: 80px;
  width: 616px;
  margin: 0 auto;
`;

export const ContentSection = styled.div`
  display: grid;
  grid-template:
    'date address' auto
    'people info' auto/ 1fr 1fr;
  gap: 36px;
  padding: 0 40px;
  ${({theme}) => theme.mediaQueriesMax.md} {
    gap: 18px;
    padding: 0 16px;
    grid-template:
      'mobgrid' auto
      'people' auto
      'info' auto/ 1fr;
  } ;
`;

export const MobileTopGrid = styled.div`
  display: none;
  grid-area: mobgrid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-size: 14px;
  line-height: 20px;
  padding-top: 10px;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  ${({theme}) => theme.mediaQueriesMax.md} {
    display: grid;
  } ;
`;

export const IconContainer = styled.div<{img?: boolean; border?: boolean}>`
  ${({img}) => img && 'background: url("/assets/images/map.png") no-repeat center'};
  ${({border, theme}) => border && `border: 1px solid ${theme.border.gray};`};
  background-color: ${({theme}) => theme.background.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 10px;
  padding: 10px;
  flex-shrink: 0;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    height: 35px;
    width: 35px;
  } ;
`;

export const Button = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const AddressItem = styled.div`
  grid-area: address;
  display: flex;
  align-items: center;
  gap: 18px;
  ${({theme}) => theme.mediaQueriesMax.md} {
    display: none;
  }
`;

export const InfoItem = styled.div`
  grid-area: info;
  border-radius: 10px;
  background-color: ${({theme}) => theme.background.dark};
  line-height: 29px;
  padding: 20px;
  word-wrap: anywhere;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 14px;
    line-height: 20px;
  } ;
`;

export const EventDate = styled.div`
  grid-area: date;
  display: flex;
  gap: 36px;
  & > div {
    border-radius: 10px;
    background-color: ${({theme}) => theme.background.dark};
  }
  ${({theme}) => theme.mediaQueriesMax.md} {
    display: none;
  }
};
`;
export const MemberList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({theme}) => theme.mediaQueriesMax.md} {
    display: block;
  }
`;

export const ListItem = styled.div`
  background-color: ${({theme}) => theme.background.dark};
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  & > div:first-child {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }
  & > div {
    color: ${({theme}) => theme.text.default};
    font-size: 24px;
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  height: 117px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  & img {
    height: 117px;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    height: 64px;
    & img {
      height: 64px;
    }
  }
`;

export const AnimationItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
