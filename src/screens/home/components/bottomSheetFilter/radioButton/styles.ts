import styled from "styled-components/native";

export const RadioButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RadioButtonLabel = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Regular};

  color: ${(props) => props.theme["primaryA"]};
`;
