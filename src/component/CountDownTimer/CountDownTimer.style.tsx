import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  color: ${({theme}) => theme.text.primary};
`;
