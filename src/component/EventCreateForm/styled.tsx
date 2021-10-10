import styled from 'styled-components';

interface TProps {
  isCenter: boolean;
}

export const Form = styled.form`
  ${({theme}) => `
    color: ${theme.text.primary};
    background-color: ${theme.background.default};
 `};
  height: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 40px;
  padding-bottom: 50px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding: 30px 16px 80px;
  }
`;

export const Title = styled.h2`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  margin-bottom: 30px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 250px;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 16px;
  right: 16px;
  padding: 0 8px;
  background-color: ${({theme}) => theme.background.dark};
  overflow-y: auto;
`;

export const ListItem = styled.button`
  padding: 8px 16px;
  background: none;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.border.dark};
  text-align: left;
  color: ${({theme}) => theme.text.light};
  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.text.default};
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const ImageWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  margin-bottom: 26px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  max-height: 300px;
`;

export const Label = styled.label<TProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({isCenter}) => isCenter && `justify-content: center;`}
  color: ${({theme}) => theme.text.light_01};
  font-size: 18px;
  line-height: 25px;
  & span {
    border-bottom: 1px solid ${({theme}) => theme.border.default};
    margin-left: 18px;
  }
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;
