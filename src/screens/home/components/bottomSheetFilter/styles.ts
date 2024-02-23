import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

export const BottomSheetContainer = styled(BottomSheet).attrs((props) => ({
  index: -1,
  enablePanDownToClose: true,
  backgroundStyle: {
    backgroundColor: props.theme["gray-150"],
  },
  handleIndicatorStyle: {
    backgroundColor: props.theme["primary-lighter"],
  },
}))``;

export const BottomSheetScrollViewContainer = styled(BottomSheetScrollView)`
  margin: 12px 28px;
`;

export const BottomSheetFilterTopicTitle = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Medium};

  margin-left: 10px;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme["primaryA"]};
`;

export const RadioButtonFilterByDaysContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 8px;
`;

export const ApplyFilterButton = styled.TouchableOpacity`
  align-items: center;

  width: 80%;
  margin: 0 auto 28px;
  padding: 14px;

  border-radius: 99px;
  background-color: ${(props) =>
    props.disabled ? props.theme["gray-400"] : props.theme["primary-lighter"]};
`;

export const ApplyFilterButtonText = styled.Text.attrs(() => ({ maxFontSizeMultiplier: 1 }))`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.Bold};

  color: ${(props) => (props.disabled ? props.theme["gray-150"] : props.theme["primaryA"])};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => ({
  size: "small",
  color: props.theme["primary-dark"],
}))``;
