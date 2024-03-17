import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const PickerStyles = {
  backgroundColor: "#FFF",
  height: 50,
  flex: 1,
  marginLeft: 50,
};

export const Container = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
  margin: 16px 40px;
`;

export const Title = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.Bold};
  color: ${({ theme }) => theme.white};
`;

export const EmptyDataContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-top: 45%;
`;

export const EmptyDataText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 18px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.Bold};

  color: ${({ theme }) => theme["primary-light"]};
`;

export const EmptyDataIcon = styled(MaterialCommunityIcons)`
  font-size: 58px;
  color: ${({ theme }) => theme["primary-light"]};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => ({
  size: "small",
  color: props.theme.secondary,
}))``;
