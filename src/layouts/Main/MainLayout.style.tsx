import styled from 'styled-components';

export const StyledContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${({theme}) => theme.background.dark};
  display: grid;
  grid-template: 'body menu';
  grid-template-rows: 1fr 0px;
  grid-template-columns: 1fr;

  ${({theme}) => theme.mediaQueries.sm} {
    grid-template-rows: none;
    grid-template: 'menu body';
    grid-template-columns: 114px auto;
  }
`;

export const MenuArea = styled.div`
  grid-area: menu;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  ${({theme}) => theme.mediaQueries.sm} {
    position: relative;
    z-index: initial;
  }
`;

export const BodyArea = styled.div`
  grid-area: body;
  background-color: ${({theme}) => theme.background.default};
  ${({theme}) => theme.mediaQueries.sm} {
    margin: 20px 20px 20px 0;
    border-radius: 20px;
  }
`;
