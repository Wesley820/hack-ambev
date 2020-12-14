import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import ResgatePontos from '../pages/ResgatePontos';

const { Navigator, Screen } = createStackNavigator();

export default function ProductRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Product" component={ResgatePontos} />
    </Navigator>
  );
}
