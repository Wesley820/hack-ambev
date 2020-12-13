import React from 'react';

import {
  Container,
  Content,
  UserInfo,
  Greeting,
  Label,
  Points,
  SettingButton,
  SettingIcon,
} from './styles';

export default function Header() {
  return (
    <Container colors={['#f2b705', '#ffffff']} start={[0, 0]}>
      <Content>
        <UserInfo>
          <Greeting>Olá Wesley</Greeting>
          <Label>Pontos Acumulados</Label>
          <Points>1.0000</Points>
        </UserInfo>
        <SettingButton>
          <SettingIcon />
        </SettingButton>
      </Content>
    </Container>
  );
}
