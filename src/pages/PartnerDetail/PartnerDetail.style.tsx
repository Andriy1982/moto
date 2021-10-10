import styled from 'styled-components';

export const PartnerDetailStyle = styled.div`
  display: grid;
  grid-template:
    'top' auto
    'middle' auto
    'description' auto
    'images' auto / 1fr;
  gap: 36px;
  padding: 40px;
  overflow: hidden;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    grid-template:
      'top' auto
      'middle' auto
      'images' auto
      'description'
      'map' auto / 100%;
    padding: 16px;
  }
`;
export const TopSection = styled.div`
  grid-area: top;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-bottom: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.h2`
  ${({theme}) => `
    color: ${theme.text.default};
 `};
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  padding: 10px 0;
`;
export const Categories = styled.h3`
  ${({theme}) => `
    color: ${theme.text.text};
 `};
  font-size: 16px;
  line-height: 22px;
`;

export const MiddleSection = styled.div`
  grid-area: middle;
  display: flex;
  gap: 36px;
  ${({theme}) => theme.mediaQueriesMax.md} {
    flex-direction: column;
  } ;
`;

export const MapBlock = styled.div`
  height: 165px;
  width: 330px;
  border-radius: 10px;
  overflow: hidden;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: none;
  } ;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({theme}) => theme.mediaQueriesMax.sm} {
    background-color: ${({theme}) => theme.background.dark};
    border-radius: 10px;
    padding: 20px 10px;
    justify-content: center;
    gap: 0;
    & > a {
      border-bottom: 1px solid ${({theme}) => theme.border.dark};
    }
    & > a:last-child {
      border-bottom: 0;
    }
  } ;
`;

export const Description = styled.div`
  grid-area: description;
  max-width: 840px;
  padding: 20px;
  font-size: 18px;
  line-height: 140%;
  background-color: ${({theme}) => theme.background.dark};
  color: ${({theme}) => theme.text.light_01};
  border-radius: 15px;
  box-shadow: 0 4px 20px 4px rgba(86, 80, 80, 0.12);
  white-space: pre-wrap;
`;

export const ImagesBlock = styled.div`
  grid-area: images;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: none;
  }
`;

export const MapMobile = styled.div`
  display: none;
  grid-area: map;
  width: 100%;
  overflow: hidden;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    display: block;
  }
`;

export const ImageContainer = styled.div<{index?: number}>`
  width: 260px;
  height: 260px;
  padding: 10px;
  ${({theme}) => theme.mediaQueriesMax.sm} {
    height: 100%;
    flex: 0 1 100px;
  }
`;
export const ModalImgContainer = styled.div`
  height: 80vh;
  width: 100vw;
  padding: 0 10px;
`;
export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
