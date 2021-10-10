import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Form = styled.form`
  ${({theme}) => `
    color: ${theme.text.primary};
    background-color: ${theme.background.default};
 `};
  /* width: 452px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 34px 40px 34px 36px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 452px);

  /* display: flex;
  justify-content: flex-end; */
  /* background-image: url('/assets/images/web/regFormBG.png'); */
  background-repeat: no-repeat;
  background-size: contain;
  /* display: grid;
  grid-template-columns: 1fr, 452px;
  grid-template-rows: 1fr; */
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  /* height: 100vh;
  display: flex; */
  justify-content: flex-end;
  background-image: url('/assets/images/web/regFormBG.png');
  background-repeat: no-repeat;
  background-size: cover;
  /* display: grid;
  grid-template-columns: 1fr, 452px;
  grid-template-rows: 1fr; */
`;

export const Title = styled.h2`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
  /* font-family: Play;
  font-style: normal; */
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  margin-bottom: 14px;
  text-align: center;
`;

export const Description = styled.p`
  ${({theme}) => `
    color: ${theme.text.light};
 `};
  /* font-family: Play;
  font-style: normal; */
  /* font-weight: bold; */
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 120px;
`;

export const LinkToRegister = styled(Link)`
  text-align: center;
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.primary};
`;

export const LinkForgotPas = styled(Link)`
  text-align: center;
  display: block;
  margin-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.background.light};
  margin-bottom: 148px;
`;

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 272px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialLink = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;

  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.background.light};
  margin-bottom: 35px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.background.gray};
  }
`;
