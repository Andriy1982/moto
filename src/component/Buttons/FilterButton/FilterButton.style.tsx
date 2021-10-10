import styled from 'styled-components';

export const FilterButtonStyle = styled.div`
  display: flex;
  padding: 0 12px;
  height: 42px;
  flex: 1 1 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0.7px solid ${({theme}) => theme.border.primary};
  background-color: ${({theme}) => theme.background.dark};
  border-radius: 10px;
  cursor: pointer;
`;
