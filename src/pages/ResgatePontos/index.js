import React from 'react';
import { View } from 'react-native';

import productImage from '../../assets/product.png';
import location1 from '../../assets/location1.png';
import location2 from '../../assets/location2.png';

import {
  ContainerScroll,
  Container,
  Topbar,
  ImgPremioContainer,
  ImgPremio,
  TitlePremio,
  PremioDescription,
  PremioDescriptionItem,
  PremioDescriptionTitle,
  LocaisResgate,
} from './styles';

const product = {
  title: 'Cerveja',
  image_url: productImage,
  description: 'Taça exclusica com seu nome para cervejas de todos os tipos',
  rascues_conditions:
    'Adquirir uma cerveja de qualquer marca na loja Empório da cerveja.',
  rescues_locations: [
    {
      id: 1,
      image_url: location1,
    },
    {
      id: 2,
      image_url: location2,
    },
  ],
};

export default function ResgatePonotos() {
  return (
    <ContainerScroll>
      <Container>
        <Topbar colors={['#f2b705', '#ffffff']} start={[0, 0]} />

        <ImgPremioContainer>
          <ImgPremio source={product.image_url} />
          <TitlePremio>{product.title}</TitlePremio>
        </ImgPremioContainer>

        <PremioDescription>
          <PremioDescriptionTitle>Você está resgatando</PremioDescriptionTitle>
          <PremioDescriptionItem>{product.description}</PremioDescriptionItem>

          <PremioDescriptionTitle>
            Condição para o resgate
          </PremioDescriptionTitle>
          <PremioDescriptionItem>
            {product.rascues_conditions}
          </PremioDescriptionItem>

          <PremioDescriptionTitle>Locais para o resgate</PremioDescriptionTitle>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {product.rescues_locations.map((item) => (
              <LocaisResgate key={item.id} source={item.image_url} />
            ))}
          </View>
        </PremioDescription>
      </Container>
    </ContainerScroll>
  );
}
