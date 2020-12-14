import React from 'react';

import ProductItem from '../ProductItem';

import { Container, List, Category } from './styles';

export default function ListProduct({ list, onSelectItem = () => {} }) {
  return (
    <Container>
      <Category>{list?.category}</Category>
      <List>
        {list.products.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            onPress={(id) => onSelectItem(id)}
          />
        ))}
      </List>
    </Container>
  );
}
