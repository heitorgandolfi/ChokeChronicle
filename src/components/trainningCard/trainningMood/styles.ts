import styled from "styled-components/native";

export const TrainningLocaleAndMoodContainer = styled.View`
  flex-direction: row;
  align-items: normal;
  justify-content: space-between;
`;

export const DateInfoText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.Bold};
  color: ${(props) => props.theme["gray-350"]};
`;

export const CityInfoText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Medium};
  color: ${(props) => props.theme["primary-light"]};
`;
