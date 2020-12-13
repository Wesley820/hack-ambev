import React from 'react';
import { Text, View } from 'react-native';

import {
  ContainerScroll,
  Container,
  Topbar,
  ImgPremioContainer,
  TitlePremio,
  PremioDescription,
  PremioDescriptionItem,
  PremioDescriptionTitle,
  LocaisResgate,
} from './styles';

export default function ResgatePonotos() {
  return (
    <ContainerScroll>
      <Container>
        <Topbar>
          <Text>voltar</Text>
          <Text>Resgate de pontos</Text>
        </Topbar>

        <ImgPremioContainer>
          <TitlePremio>Taça para cerveja</TitlePremio>
        </ImgPremioContainer>

        <PremioDescription>
          <PremioDescriptionTitle>Você está resgatando</PremioDescriptionTitle>
          <PremioDescriptionItem>
            Taça exclusica com seu nome para cervejas de todos os tipos
          </PremioDescriptionItem>

          <PremioDescriptionTitle>
            Condição para o resgate
          </PremioDescriptionTitle>
          <PremioDescriptionItem>
            Adquirir uma cerveja de qualquer marca na loja Empório da cerveja.
          </PremioDescriptionItem>

          <PremioDescriptionTitle>Locais para o resgate</PremioDescriptionTitle>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <LocaisResgate source="none" />
            <LocaisResgate source="none" />
          </View>
        </PremioDescription>
      </Container>
    </ContainerScroll>
  );
}
