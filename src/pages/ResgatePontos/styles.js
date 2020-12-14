import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const ContainerScroll = styled.ScrollView`
  padding: 0;
  background-color: #fff;
`;
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const Topbar = styled(LinearGradient)`
  width: 100%;
  height: 210.54px;
  padding: 32px;
`;

export const ImgPremioContainer = styled.View`
  position: relative;
  width: 250px;
  height: 250px;
  margin-top: -95px;
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  elevation: 2.5px;
  align-items: center;
  justify-content: center;
`;

export const ImgPremio = styled.Image``;

export const TitlePremio = styled.Text`
  position: absolute;
  width: 250.01px;
  bottom: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #bf6b04;
`;

export const PremioDescription = styled.ScrollView`
  padding: 16px 32px;
`;

export const PremioDescriptionTitle = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #bf6b04;
`;
export const PremioDescriptionItem = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #590303;
`;

export const LocaisResgate = styled.Image`
  width: 100%;
  height: 140px;
  background: red;
  border-radius: 8px;
  margin: 8px;
  flex: 1;
`;
