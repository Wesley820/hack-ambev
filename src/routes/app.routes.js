import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Octicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductStackScreen from './product.routes';

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
          tabBarLabel: icons[route.name]?.label,
        })}
        tabBarOptions={{
          activeTintColor: '#f2b705',
        }}
      >
        <Screen name="Home" component={ProductStackScreen} />
        <Screen name="Explore" component={ProductStackScreen} />
        <Screen name="Add" component={ProductStackScreen} />
        <Screen name="Awards" component={ProductStackScreen} />
        <Screen name="Ranking" component={ProductStackScreen} />
      </Navigator>
    </>
  );
}
