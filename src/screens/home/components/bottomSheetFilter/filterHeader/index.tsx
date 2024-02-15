import React from "react";
import { TouchableOpacity, View } from "react-native";

import {
  BottomSheetFilterHeader,
  BottomSheetFilterIconContainer,
  BottomSheetFilterIcon,
  BottomSheetFilterIconText,
  BottomSheetFilterClearAllButton,
  BottomSheetFilterClearAllText,
} from "./styles";

interface FilterHeaderProps {
  handleCloseBottomSheet: () => void;
  handleClearAllFilters: () => void;
}

export const FilterHeader = ({
  handleCloseBottomSheet,
  handleClearAllFilters,
}: FilterHeaderProps) => {
  return (
    <BottomSheetFilterHeader>
      <View>
        <BottomSheetFilterIconContainer>
          <BottomSheetFilterIcon name="filter-outline" />
          <BottomSheetFilterIconText>Filter</BottomSheetFilterIconText>
        </BottomSheetFilterIconContainer>

        <BottomSheetFilterClearAllButton onPress={handleClearAllFilters} activeOpacity={0.9}>
          <BottomSheetFilterClearAllText>Clear All</BottomSheetFilterClearAllText>
        </BottomSheetFilterClearAllButton>
      </View>

      <TouchableOpacity onPress={handleCloseBottomSheet} activeOpacity={0.9}>
        <BottomSheetFilterIcon name="close" />
      </TouchableOpacity>
    </BottomSheetFilterHeader>
  );
};
