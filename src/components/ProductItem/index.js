import React from 'react';
import { Container, ProductImage, ProductName } from './styles';

export default function ProductItem({ product, onPress = () => {} }) {
  return (
    <Container onPress={() => onPress(product?.id)}>
      <ProductImage source={product?.image_url} />
      <ProductName>{product?.title}</ProductName>
    </Container>
  );
}
