import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 105px;
  left: 0;
  right: 0;
  z-index: 10;

  ${({theme}) => theme.mediaQueries.sm} {
    bottom: 40px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  ${({theme}) => theme.mediaQueries.sm} {
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${({theme}) => theme.mediaQueries.sm} {
    padding: 40px;
  }
`;
