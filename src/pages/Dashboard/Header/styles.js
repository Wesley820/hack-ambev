import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(LinearGradient)`
  padding-top: 10px;
  height: 133px;
  margin-bottom: 30px;
`;

export const Content = styled.View`
  flex-direction: row;
  padding: 24px;
  align-items: flex-start;
  height: 100%;
  justify-content: space-between;
`;

export const UserInfo = styled.View``;

export const Greeting = styled.Text`
  font-size: 24px;
  color: #bf6b04;
  font-weight: normal;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #bf6b04;
`;

export const Points = styled.Text`
  font-size: 16px;
  color: #bf6b04;
`;

export const SettingButton = styled.TouchableOpacity``;

export const SettingIcon = styled(Ionicons).attrs({
  name: 'settings-outline',
  size: 20,
  color: '#BF6B04',
})`
  border: 2px solid #bf6b04;
  padding: 7px 4px 3px 8px;
  border-radius: 50px;
`;
