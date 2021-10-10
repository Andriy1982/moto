import styled from 'styled-components';

export const Sos1 = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 125px;
  background: #ffffff;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.4), inset 0px 0px 15px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Sos2 = styled.div`
  height: 208px;
  width: 208px;
  border-radius: 104px;
  background: #ffffff;
  box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Sos3 = styled.button`
  outline: none;
  height: 176px;
  width: 176px;
  border-radius: 133px;
  background: #ffffff;
  box-shadow: 0px 40px 50px rgba(108, 108, 108, 0.4), inset 0px 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: opacity 0.15s linear;
  cursor: pointer;

  &:active {
    opacity: ${({disabled}) => (disabled ? 1 : 0.75)};
  }
`;
