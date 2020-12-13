import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import ResgatePonotos from '../pages/ResgatePontos';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator headerMode="none" style={{ paddinTop: '32px' }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="ResgatePontos" component={ResgatePonotos} />
    </Navigator>
  );
}
