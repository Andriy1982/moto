import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  ${({theme}) => `
    color: ${theme.text.default};
  `};
  height: 100%;
  padding: 40px;
  display: grid;
  grid-template:
    'none options' 30px
    'sidebar itemList' 1fr / 1fr 4fr;
  column-gap: 35px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    grid-template:
      'title' auto
      'sidebar' auto
      'options' 30px
      'itemList' 1fr / 1fr;
    padding: 16px;
    gap: 10px;
  }
`;

export const ItemList = styled.div`
  grid-area: itemList;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 35px;
  ${({theme}) => theme.mediaQueriesMax.xl} {
    gap: 20px;
  }
  ${({theme}) => theme.mediaQueriesMax.md} {
    grid-template-columns: 1fr;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    grid-template-columns: 1fr 1fr;
  }
  ${({theme}) => theme.mediaQueriesMax.xs} {
    grid-template-columns: 1fr;
  }
`;

export const MapList = styled.div`
  grid-area: itemList;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;
`;

export const Options = styled.div`
  grid-area: options;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledNavLink = styled(NavLink).attrs({activeClassName: 'active'})`
  color: inherit;
  &.active {
    color: ${({theme}) => theme.text.primary};
    border-bottom: 1px dotted ${({theme}) => theme.border.primary};
  }
`;

export const Title = styled.div`
  display: none;
  font-size: 24px;
  line-height: 32px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    grid-area: title;
    display: block;
  }
`;
