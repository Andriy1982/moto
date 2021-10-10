import PartnerCard from '@app/component/PartnerCard/PartnerCard';
import React from 'react';
import {
  Container,
  ItemList,
  Options,
  Sidebar,
  StyledNavLink,
  Title,
  MapList,
} from './PartnersPage.style';
import {PartnersSidebar, PartnersMap} from './components';
import {Routes} from '@app/routes';
import {useData} from './useData';
import {Switch, Route} from 'react-router-dom';
export interface Props {}

const PartnersPage: React.FC<Props> = () => {
  const {partners} = useData();
  return (
    <Container>
      <Title>Partners</Title>
      <Options>
        <StyledNavLink exact to={Routes.PARTNERS}>
          Списком
        </StyledNavLink>
        <StyledNavLink exact to={Routes.PARTNERS_MAP}>
          На карте
        </StyledNavLink>
      </Options>
      <Sidebar>
        <PartnersSidebar />
      </Sidebar>
      <Switch>
        <Route exact path={Routes.PARTNERS}>
          <ItemList>
            {partners.map((partner) => (
              <PartnerCard partner={partner} key={partner.id} />
            ))}
          </ItemList>
        </Route>
        <Route exact path={Routes.PARTNERS_MAP}>
          <MapList>
            <PartnersMap />
          </MapList>
        </Route>
      </Switch>
    </Container>
  );
};

export default PartnersPage;
