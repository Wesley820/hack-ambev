import React from 'react';
import { useAuth } from '../../contexts/auth.context';

import { Container, LoginButton, LoginButtonText } from './styles';

export default function Login() {
  const { setLogin } = useAuth();

  function handleNavigate() {
    setLogin();
  }

  return (
    <Container>
      <LoginButton onPress={handleNavigate}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>
    </Container>
  );
}
