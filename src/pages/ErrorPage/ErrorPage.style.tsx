import styled from 'styled-components';

export const ErrorPageStyle = styled.div`
  padding: 40px;
  font-size: 50px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  height: 80%;
  text-align: center;

  ${({theme}) => theme.mediaQueriesMax.sm} {
    padding: 16px 16px 0;
  }

  & h1 {
    position: absolute;
    font-size: 400px;
    font-weight: bold;
    margin: auto;
    opacity: 0.05;
    z-index: 3;

    ${({theme}) => theme.mediaQueriesMax.md} {
      font-size: 300px;
    }

    ${({theme}) => theme.mediaQueriesMax.sm} {
      font-size: 250px;
    }

    ${({theme}) => theme.mediaQueriesMax.xs} {
      font-size: 180px;
    }
  }

  & h2 {
    z-index: 4;
    ${({theme}) => theme.mediaQueriesMax.md} {
      font-size: 40px;
    }
  }

  & p {
    z-index: 4;
    color: ${({theme}) => theme.text.text};
    font-size: 30px;
    text-align: center;
  }
`;
