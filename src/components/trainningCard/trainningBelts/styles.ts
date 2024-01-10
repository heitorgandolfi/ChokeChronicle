import styled from "styled-components/native";

export const TrainningFoughtBeltsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BeltsListContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;

  padding: 4px 12px;

  border: 1px solid transparent;
  border-radius: 16px;

  background-color: ${(props) => props.theme.primaryA};
`;
