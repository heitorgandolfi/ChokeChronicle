import { useUnit } from "effector-react";
import { useCallback, useRef } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { GetAllTrainningsUseCase } from "../../useCases/getAllTrainningsUseCase";
import GetTrainningsStore from "../../stores/getTrainningsStore/getTrainningsStore";

import { HomeScreenContent } from "./homeScreenContent";
import { BottomSheetFilter } from "./components/bottomSheetFilter";

type BottomSheetHandle = {
  openBottomSheetFilter: () => void;
};

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  const { trainnings, isLoading } = useUnit(GetTrainningsStore);
  const isFocused = useIsFocused();

  const handleButtonPress = () => {
    bottomSheetRef.current?.openBottomSheetFilter();
  };

  useFocusEffect(
    useCallback(() => {
      GetAllTrainningsUseCase.execute();
    }, [isFocused]),
  );

  return (
    <>
      <HomeScreenContent
        trainnings={trainnings}
        isLoading={isLoading}
        onFilterButtonPress={handleButtonPress}
      />

      <BottomSheetFilter ref={bottomSheetRef} />
    </>
  );
};
