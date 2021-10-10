import React from 'react';
//app
import Navigation from '@app/component/Navigation';
//local
import {StyledContainer, MenuArea, BodyArea} from './MainLayout.style';

export const MainLayout: React.FC = ({children}: any) => {
  return (
    <StyledContainer>
      <MenuArea>
        <Navigation />
      </MenuArea>
      <BodyArea>{children}</BodyArea>
    </StyledContainer>
  );
};
