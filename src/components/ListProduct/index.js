import React from 'react';

import ProductItem from '../ProductItem';

import { Container, List, Category } from './styles';

export default function ListProduct({ list }) {
  return (
    <Container>
      <Category>{list?.category}</Category>
      <List>
        {list.products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </List>
    </Container>
  );
}
