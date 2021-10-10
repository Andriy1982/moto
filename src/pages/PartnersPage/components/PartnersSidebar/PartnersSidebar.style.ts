import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > div > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const FilterList = styled.div`
  padding: 20px 0;
`;

export const Additional = styled.h3`
  ${({theme}) => `
    color: ${theme.text.text};
  `};
  font-size: 16px;
  line-height: 22px;
  position: relative;
`;

export const DownArrow = styled.div<{isActive: boolean}>`
  margin-top: 3px;
  width: 10px;
  height: 10px;
  border: solid ${({theme}) => theme.border.gray};
  border-width: 0 1px 1px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: 0.5s;
  ${({isActive}) =>
    isActive
      ? `
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg)`
      : null}
`;

export const FlexMore = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  background-color: inherit;
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.border.gray};
  margin-top: 12px;
  color: ${({theme}) => theme.text.default};
`;

export const MobileSidebar = styled.div`
  position: relative;
`;

export const FilterButtons = styled.div`
  gap: 20px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: flex;
  }
`;

export const MoreFilter = styled.div<{isActive: boolean}>`
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  ${({isActive}) => isActive && 'height: auto;'}
`;
