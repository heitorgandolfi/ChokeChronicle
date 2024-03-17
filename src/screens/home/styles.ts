import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const LoadingIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => ({
  size: "small",
  color: props.theme.secondary,
}))``;
