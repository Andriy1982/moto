import styled from 'styled-components';

export interface IStyleProps {
  marginTop?: string;
  marginBottom?: string;
  iconLeft?: boolean;
  size?: string;
  iconTop?: boolean;
}

export const IconButtonStyle = styled.button<IStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SubmitButtonStyle = styled.button<IStyleProps>`
  background-color: ${({theme}) => theme.background.primary};
  color: ${({theme}) => theme.text.default};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  width: 273px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-top: ${({marginTop}) => marginTop || '48px'};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 20px 4px rgba(86, 80, 80, 0.12);
`;

export const DangerButtonStyle = styled.button<IStyleProps>`
  background-color: ${({theme}) => theme.background.danger};
  color: ${({theme}) => theme.text.default};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  width: 273px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-top: ${({marginTop}) => marginTop || '48px'};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 20px 4px rgba(86, 80, 80, 0.12);
`;

export const OutlineButtonStyle = styled.button<IStyleProps>`
  background-color: ${({theme}) => theme.background.primary_01};
  color: ${({theme}) => theme.text.primary};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  width: 273px;
  height: 48px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-top: ${({marginTop}) => marginTop || '48px'};
  margin-bottom: ${({marginBottom}) => marginBottom || '48px'};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 20px 4px rgba(86, 80, 80, 0.12);
`;
