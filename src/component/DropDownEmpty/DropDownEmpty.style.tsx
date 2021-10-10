import styled from 'styled-components';

interface IStyleProps {
  isOpen?: boolean;
  topSize?: string;
}

export const List = styled.ul<IStyleProps>`
  width: 100%;
  overflow: hidden;
  height: ${({isOpen}) => (isOpen ? 'auto' : '0')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  transition: all 1s linear;
`;

export const Item = styled.li<IStyleProps>`
  color: ${({theme}) => theme.text.gray};
  width: 100%;
  background-color: ${({theme}) => theme.background.darken};
  cursor: pointer;
  padding: 10px 0 10px 5px;
`;
