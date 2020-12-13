import React from 'react';
import { Container, ProductImage, ProductName } from './styles';

export default function ProductItem({ product }) {
  return (
    <Container>
      <ProductImage source={product?.image_url} />
      <ProductName>{product?.title}</ProductName>
    </Container>
  );
}
