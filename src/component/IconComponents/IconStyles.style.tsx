import styled from 'styled-components';

export const IconInfoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  & p {
    font-size: 18px;
    line-height: 140%;
    ${({theme}) => `
    color: ${theme.text.light_01};
 `};
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
`;
