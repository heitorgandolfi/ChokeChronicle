import styled from "styled-components/native";

export const ApplyFilterButton = styled.TouchableOpacity`
  align-items: center;
  width: 80%;
  margin: 0 auto 28px;
  padding: 14px;
  border-radius: 99px;
  background-color: ${(props) => props.theme["primary-lighter"]};
`;

export const ApplyFilterButtonText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Bold};

  color: ${(props) => props.theme["primaryA"]};
`;
