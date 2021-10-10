import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface IStyleProps {
  center?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 452px);
  background-repeat: no-repeat;
  background-size: contain;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  justify-content: flex-end;
  background-image: url('/assets/images/web/regFormBG.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  ${({theme}) => `

    background-color: ${theme.background.default};
 `};

  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 34px 40px 34px 36px;
`;

export const Title = styled.h2`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
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
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  margin-bottom: 46px;
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.background.primary};
  color: ${({theme}) => theme.text.default};
  border-radius: 30px;
  width: 273px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-top: 48px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 20px 4px rgba(86, 80, 80, 0.12);
`;

export const Text = styled.p`
  margin: auto auto 0;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.default};
`;

export const LinkStyle = styled(Link)<IStyleProps>`
  ${({center}) =>
    center &&
    `text-align: center;
  display: block;
  margin-top: 10px;
  `}
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.primary};
`;

export const TextError = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.danger};
  margin-top: 16px;
`;
