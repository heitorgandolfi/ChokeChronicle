import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { ApplyFilterButton, ApplyFilterButtonText } from "./styles";

export const BottomSheetFilter = forwardRef((_, ref) => {
  const { "gray-150": bottomSheetBackground, "primary-lighter": indicatorBackground } = useTheme();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetSnapPoints = useMemo(() => ["75%"], []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    [],
  );

  useImperativeHandle(ref, () => ({
    openBottomSheetFilter: () => {
      bottomSheetRef.current?.expand();
    },
  }));

  return (
    <BottomSheet
      index={-1}
      ref={bottomSheetRef}
      snapPoints={bottomSheetSnapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: bottomSheetBackground }}
      handleIndicatorStyle={{ backgroundColor: indicatorBackground }}
      enablePanDownToClose
    >
      <BottomSheetScrollView>
        <Text>DAYS</Text>
        <Text>Last 7 days</Text>
        <Text>Last 15 days</Text>
        <Text>Last 30 days</Text>
      </BottomSheetScrollView>
      <ApplyFilterButton onPress={() => bottomSheetRef.current?.close()} activeOpacity={0.9}>
        <ApplyFilterButtonText>Apply</ApplyFilterButtonText>
      </ApplyFilterButton>
    </BottomSheet>
  );
});
