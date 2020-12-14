import React from 'react';

import Header from './Header';
import ListProducts from '../../components/ListProduct';

import productImage from '../../assets/product.png';

import { Container, Content } from './styles';

const dataProducts = [
  {
    id: 1,
    category: 'Ultimos produtos registrados',
    products: [
      {
        id: 1,
        title: 'Chop Brahma Pilsen',
        image_url: productImage,
      },
      {
        id: 2,
        title: 'Garrafa de cerveja',
        image_url: productImage,
      },
    ],
  },
  {
    id: 2,
    category: 'Feitos pra você',
    products: [
      {
        id: 1,
        title: 'Chop Brahma Pilsen',
        image_url: productImage,
      },
      {
        id: 2,
        title: 'Cerveja',
        image_url: productImage,
      },
      {
        id: 3,
        title: 'Garrafa de cerveja',
        image_url: productImage,
      },
    ],
  },
];

export default function Dashboard({ navigation }) {
  function handleNavigateToProduct() {
    navigation.navigate('Product');
  }

  return (
    <Container>
      <Content>
        <Header />
        {dataProducts.map((products) => (
          <ListProducts
            list={products}
            onSelectItem={handleNavigateToProduct}
          />
        ))}
      </Content>
    </Container>
  );
}
