import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Container = styled.div<{transparent: boolean}>`
  ${({theme, transparent}) => `
    background:  ${transparent ? 'transparent' : theme.background.dark};
 `};
  box-shadow: 0 4px 20px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  padding: 15px;
  display: grid;
  grid-auto-rows: 1fr;
  gap: 10px;
`;
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  ${({theme}) => theme.mediaQueriesMax.md} {
    gap: 20px;
  }
`;
export const LogoContainer = styled.div`
  border-radius: 50%;
  height: 58px;
  width: 58px;
  overflow: hidden;
  flex-shrink: 0;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`;
export const Categories = styled.h3`
  ${({theme}) => `
    color: ${theme.text.text};
 `};
  font-size: 16px;
  line-height: 22px;
  //display: inline;
  //text-overflow: ellipsis;
  //overflow: hidden;
  //white-space: nowrap;
`;
export const BotSection = styled.div`
  border-top: 2px solid ${({theme}) => theme.border.dark};
  ${({theme}) => `
    color: ${theme.text.text};
 `};
  font-size: 16px;
  line-height: 22px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const BotFlex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const IconContainer = styled.div<{img?: boolean}>`
  ${(props) => props.img && 'background-image: url("/assets/images/map.png")'};
  background-color: ${({theme}) => theme.background.primary_01};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
`;
