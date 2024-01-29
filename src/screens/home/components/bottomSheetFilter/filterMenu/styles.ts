import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const FilterMenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 12px;
`;

interface FilterButtonProps {
  buttonText?: boolean;
}

export const FilterText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))<FilterButtonProps>`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Medium};

  color: ${(props) => (props.buttonText ? props.theme["primary"] : props.theme["gray-350"])};
`;

export const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 8px 24px;

  border-radius: 6px;
  background-color: ${(props) => props.theme["secondary"]};
`;

export const FilterIcon = styled(MaterialCommunityIcons)`
  font-size: 28px;
  color: ${(props) => props.theme["primary"]};
`;
