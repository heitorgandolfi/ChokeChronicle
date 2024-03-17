import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const FilterMenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 16px 0 8px;
`;

interface FilterButtonProps {
  buttonText?: boolean;
}

export const FilterText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))<FilterButtonProps>`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Medium};

  color: ${(props) => (props.buttonText ? props.theme["primary"] : props.theme["gray-350"])};
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 150px;
  height: 44px;

  border-radius: 6px;
  background-color: ${(props) => props.theme["secondary"]};
`;

export const FilterIndicator = styled.View`
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border-radius: 90px;

  background-color: ${({ theme }) => theme["secondary-dark"]};
`;

export const FilterIcon = styled(MaterialCommunityIcons)`
  font-size: 28px;
  color: ${(props) => props.theme["primary"]};
`;
