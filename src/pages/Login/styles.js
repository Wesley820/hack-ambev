import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 10px 0 10px;
  background-color: #008877;
  width: 100%;
  border-radius: 5px;
`;

export const LoginButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
