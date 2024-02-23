import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const DeleteCardIconContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  height: 50px;
  width: 50px;
  right: 40px;
  top: 45%;
`;
export const TrainningCardContainer: any = styled(Animated.View)`
  gap: 14px;
  margin: 20px 16px 5px;
  padding: 16px;

  border: 1px solid transparent;
  border-radius: 16px;

  elevation: 4;
  background-color: ${(props) => props.theme.primaryB};
`;

export const GeneralInfosText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Medium};
  color: ${(props) => props.theme["gray-350"]};
`;
