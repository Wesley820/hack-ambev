import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './contexts/auth.context';
import Routes from './routes';

export default function Main() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
