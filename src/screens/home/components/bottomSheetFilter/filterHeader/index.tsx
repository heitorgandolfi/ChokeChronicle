import React from "react";
import {
  BottomSheetFilterHeader,
  BottomSheetFilterIconContainer,
  BottomSheetFilterIcon,
  BottomSheetFilterIconText,
} from "./styles";
import { TouchableOpacity } from "react-native";

interface FilterHeaderProps {
  handleCloseBottomSheet: () => void;
}

export const FilterHeader = ({ handleCloseBottomSheet }: FilterHeaderProps) => {
  return (
    <BottomSheetFilterHeader>
      <BottomSheetFilterIconContainer>
        <BottomSheetFilterIcon name="filter-outline" />
        <BottomSheetFilterIconText>Filter</BottomSheetFilterIconText>
      </BottomSheetFilterIconContainer>

      <TouchableOpacity onPress={handleCloseBottomSheet} activeOpacity={0.9}>
        <BottomSheetFilterIcon name="close" />
      </TouchableOpacity>
    </BottomSheetFilterHeader>
  );
};
