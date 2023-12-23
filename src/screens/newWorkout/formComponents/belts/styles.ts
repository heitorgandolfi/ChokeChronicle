import styled from "styled-components/native";

export const BeltsContainer = styled.View`
  margin: 12px 0 24px 0;
`;

export const BeltsContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Belt = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 4px;

  border-radius: 8px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.primaryA};
`;

export const BeltImage = styled.Image`
  width: 19px;
  height: 19px;
`;
