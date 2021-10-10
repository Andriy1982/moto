import styled from 'styled-components';

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    gap: 10px;
  }
  & > div:last-child {
    display: flex;
  }
  & > div > div:last-child {
    font-size: 14px;
    line-height: 17px;
    color: ${({theme}) => theme.text.gray};
    background-color: ${({theme}) => theme.background.light_0};
  }
`;
export const CreatorName = styled.div`
  line-height: 21px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 12px;
    line-height: 14px;
  } ;
`;
export const ImageContainer = styled.div<{member: boolean}>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({theme}) => theme.background.default};
  border: 1px solid ${({theme}) => theme.border.gray};
  flex-shrink: 0;
  cursor: pointer;
  ${({member}) =>
    member &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -30px;
    `}
`;

export const Creator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > a:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
    color: inherit;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    gap: 10px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({theme}) => theme.text.gray};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 10px;
  } ;
`;

export const People = styled.div`
  grid-area: people;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-self: baseline;
  padding: 15px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.background.dark};
`;
