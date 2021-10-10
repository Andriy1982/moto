import styled from 'styled-components';
import {motion} from 'framer-motion';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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

export const CurrentContainer = styled(motion.div).attrs({
  layout: true,
})`
  width: 500px;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #28292b;
  border-radius: 10px;
  padding-top: 5px;
`;

export const HiddenCurrent = styled(motion.span).attrs({
  layout: false,
})`
  color: #fff;
`;

export const ButtonShow = styled(motion.button).attrs({
  type: 'button',
  layout: true,
})`
  width: 68px;
  height: 32px;
  background: transparent;
  border: none;
  position: relative;
  margin-top: -30px;
`;
