import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const BottomSheetFilterHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

export const BottomSheetFilterIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const BottomSheetFilterIcon = styled(MaterialCommunityIcons)`
  font-size: 28px;
  color: ${(props) => props.theme["primary"]};
`;

export const BottomSheetFilterIconText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Regular};

  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme["primaryA"]};
`;

export const BottomSheetFilterClearAllButton = styled.TouchableOpacity`
  margin: 12px 0 0 8px;
  padding: 6px 16px;

  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme["primary-lighter"]};
`;

export const BottomSheetFilterClearAllText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Medium};

  text-transform: capitalize;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme["primaryA"]};
`;
