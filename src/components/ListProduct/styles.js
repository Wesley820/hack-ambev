import styled from 'styled-components/native';

export const Container = styled.View``;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 8,
  },
})``;

export const Category = styled.Text`
  font-size: 16px;
  color: #bf6b04;
  margin-bottom: 10px;
  margin-left: 24px;
`;
