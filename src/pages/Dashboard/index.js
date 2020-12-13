import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  function handleNavigateToResgatePontos() {
    navigation.navigate('ResgatePontos');
  }

  return (
    <View>
      <Text>Hello Dashboard</Text>
      <Button
        title="Resgate de pontos"
        onPress={handleNavigateToResgatePontos}
      />
    </View>
  );
}
