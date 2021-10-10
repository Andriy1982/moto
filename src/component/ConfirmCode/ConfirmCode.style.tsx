import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 102px;
  padding-bottom: 60px;
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.background.default};
  background-image: url('/assets/images/web/codeBG.png');
  background-repeat: no-repeat;
  background-position: center;
  div {
    margin-left: auto;
    margin-right: auto;
  }
  input {
    text-align: center;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  color: ${({theme}) => theme.text.default};
  margin-bottom: 24px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.light};
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.light};
  margin-top: 16px;
`;

export const Button = styled.button`
  width: 200px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin: 0 auto;
  color: ${({theme}) => theme.text.primary};
`;

export const props = {
  inputStyle: {
    margin: '6px',
    fontSize: '36px',
    lineHeight: '32px',
    border: '1px solid lightskyblue',
    width: '48px',
    height: '72px',
    background: '#E0E0E0',
    boxShadow: 'inset 0px 1px 4px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin: '4px',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red',
  },
};
