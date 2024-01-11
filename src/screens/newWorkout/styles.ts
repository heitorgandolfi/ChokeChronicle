import styled from "styled-components/native";

export const FormContainer = styled.View`
  margin: 24px 16px;
  padding: 20px 28px;

  border: 1px solid transparent;
  border-radius: 8px;

  background: ${(props) => props.theme.primaryB};
`;

interface InputProps {
  interactionInput?: boolean;
  foughtBeltsInput?: boolean;
  hasError?: boolean;
  isHidden?: boolean;
}

export const Input = styled.TextInput<InputProps>`
  display: ${(props) => (props.isHidden ? "none" : "flex")};

  width: ${(props) => (props.interactionInput ? "32px" : "auto")};
  margin-bottom: ${(props) => (props.foughtBeltsInput ? "none" : "12px")};
  padding: 2px 8px;

  text-align: ${(props) => (props.interactionInput || props.foughtBeltsInput ? "center" : "left")};

  border-radius: 8px;
  border: 1px solid;
  border-color: ${(props) => (props.hasError ? props.theme.error : "transparent")};

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.primaryA};
`;

export const ErrorText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-family: ${(props) => props.theme.fonts.Bold};

  margin: -8px 0 8px;

  color: ${(props) => props.theme.error};
`;

interface FormTextProps {
  interactionsText?: boolean;
}

export const FormText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-weight: ${(props: FormTextProps) => (props.interactionsText ? "400" : "600")};

  margin-bottom: 8px;

  color: ${(props) => props.theme.white};
`;

export const SubmitButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 42px;

  margin: 16px auto 0;
  padding: 9px 18px;

  border: 1px solid transparent;
  border-radius: 16px;

  background-color: ${(props) => props.theme.tertiary};
`;

export const SubmitButtonText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  color: ${(props) => props.theme["gray-450"]};
  font-family: ${(props) => props.theme.fonts.Bold};
`;
