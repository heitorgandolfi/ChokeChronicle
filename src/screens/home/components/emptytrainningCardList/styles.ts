import styled from "styled-components/native";

export const EmptyCardListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin: 0 8px;
  `;

export const EmptyCardListText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 18px;
  font-weight: bold;
  text-align: center;

  color: ${(props) => props.theme["primary-lighter"]};
`;

export const EmptyCardListButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 42px;

  margin: 32px auto 0;
  padding: 9px 18px;

  border: 1px solid transparent;
  border-radius: 16px;

  background-color: ${(props) => props.theme.tertiary};
`;
