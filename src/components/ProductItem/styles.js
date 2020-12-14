import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  align-items: center;
  width: 160px;
  border: 1px solid #ddd;
  margin-right: 16px;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 12px;
`;

export const ProductImage = styled.Image``;

export const ProductName = styled.Text`
  font-size: 12px;
  color: #bf6b04;
  text-align: center;
`;
