import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 104px);
  grid-template-rows: repeat(auto-fill, 104px);
  grid-gap: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  opacity: 0;
  z-index: 2;
`;

export const Item = styled.li`
  position: relative;
  width: 104px;
  height: 104px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.background.darken};
  &:hover ${CloseButton} {
    opacity: 1;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Input = styled.input`
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
`;
