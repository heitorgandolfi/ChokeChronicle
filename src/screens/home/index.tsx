import { useUnit } from "effector-react";
import { useCallback, useRef } from "react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { filterTrainnings } from "../../shared/utils/filterTrainnings";
import { GetAllTrainningsUseCase } from "../../useCases/getAllTrainningsUseCase";
import GetTrainningsStore from "../../stores/getTrainningsStore/getTrainningsStore";
import { GetFilteredTrainningsStore } from "../../stores/getTrainningsStore/filteredTrainnings/getTrainningsStore";

import { HomeScreenContent } from "./homeScreenContent";
import { BottomSheetFilter } from "./components/bottomSheetFilter";

type BottomSheetHandle = {
  openBottomSheetFilter: () => void;
};

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  const { trainnings, isLoading } = useUnit(GetTrainningsStore);
  const { filteredTrainnings } = useUnit(GetFilteredTrainningsStore);

  const trainningsToRender = filterTrainnings(trainnings, filteredTrainnings);

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
        trainnings={trainningsToRender}
        isLoading={isLoading}
        onFilterButtonPress={handleButtonPress}
        hasAnyFilter={filteredTrainnings.length > 0}
      />

      <BottomSheetFilter ref={bottomSheetRef} />
    </>
  );
};
