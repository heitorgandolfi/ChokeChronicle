import styled from "styled-components/native";

export const TrainningCardContainer = styled.View`
  gap: 14px;
  margin: 20px 16px 5px;
  padding: 16px;

  border: 1px solid transparent;
  border-radius: 16px;

  elevation: 12;
  background-color: ${(props) => props.theme.primaryB};
`;

export const TrainningLocaleAndMoodContainer = styled.View`
  flex-direction: row;
  align-items: normal;
  justify-content: space-between;
`;

export const TrainningFoughtBeltsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BeltsListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;

  padding: 4px 12px;

  border: 1px solid transparent;
  border-radius: 16px;

  background-color: ${(props) => props.theme.primaryA};
`;

export const TrainningStatisticsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateInfoText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme["gray-350"]};
`;

export const CityInfoText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme["primary-light"]};
`;

export const GeneralInfosText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme["gray-350"]};
`;
