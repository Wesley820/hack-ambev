import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Octicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
    label: 'Início',
  },
  Awards: {
    lib: AntDesign,
    name: 'gift',
    label: 'Prêmios',
  },
  Explore: {
    lib: AntDesign,
    name: 'search1',
    label: 'Explorar',
  },
  Ranking: {
    lib: Octicons,
    name: 'graph',
    label: 'Ranking',
  },
  Add: {
    lib: Feather,
    name: 'plus-square',
    label: 'Adicionar',
  },
};

export default function AppRoutes() {
  return (
    <>
      <StatusBar backgroundColor="#f2b705" />
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          },
          tabBarLabel: icons[route.name].label,
        })}
        tabBarOptions={{
          activeTintColor: '#f2b705',
        }}
      >
        <Screen name="Home" component={Dashboard} />
        <Screen name="Explore" component={() => null} />
        <Screen name="Add" component={() => null} />
        <Screen name="Awards" component={() => null} />
        <Screen name="Ranking" component={() => null} />
      </Navigator>
    </>
  );
}
