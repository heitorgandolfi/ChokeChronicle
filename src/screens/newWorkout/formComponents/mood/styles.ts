import styled from "styled-components/native";

export const MoodContainer = styled.View``;

export const ImagesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 8px;
`;

export const MoodImage = styled.Image``;

interface MoodImageOnButtonProps {
  isSelected: boolean;
}

export const Button = styled.TouchableOpacity<MoodImageOnButtonProps>`
  padding: 8px;

  border-radius: 8px;
  border: 2px solid;
  border-color: ${(props) => (props.isSelected ? props.theme.secondary : "transparent")};

  background: ${(props) => props.theme.primaryA};
`;

export const ErrorText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  margin-top: 4px;

  font-weight: bold;

  color: ${(props) => props.theme.error};
`;