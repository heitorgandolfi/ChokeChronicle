import styled from "styled-components/native";

interface MetricsCardProps {
  leftBorderColor: string;
}
export const MetricsCard = styled.TouchableOpacity<MetricsCardProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: center;

  width: 80%;
  height: 50px;
  margin-bottom: 20px;

  elevation: 4;

  border-left-width: 12px;
  border-radius: 8px;
  border-color: ${({ leftBorderColor }) => leftBorderColor};
  background: ${({ theme }) => theme.white};
`;

export const MetricsCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const MetricsCardText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.Medium};

  text-transform: capitalize;

  color: ${({ theme }) => theme["primary-darker"]};
`;

export const MetricsCardPercentage = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.Medium};

  text-transform: capitalize;

  color: ${({ theme }) => theme["primary-light"]};
`;
