import styled from "styled-components/native";

export const EmptyCardListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin: 0 8px;
`;

interface EmptyCardListIconProps {
  buttonText?: boolean;
}
export const EmptyCardListText = styled.Text.attrs(() => ({
  maxFontSizeMultiplier: 1,
}))<EmptyCardListIconProps>`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.Bold};
  text-align: center;

  color: ${(props) => (props.buttonText ? props.theme["gray-450"] : props.theme["primary-light"])};
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
