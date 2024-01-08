import { useCallback } from "react";
import { useUnit } from "effector-react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import GetTrainningsStore from "../../stores/getTrainningsStore/getTrainningsStore";
import { GetAllTrainningsUseCase } from "../../useCases/getAllTrainningsUseCase";

import { TrainningCardList } from "./components/trainningCardList";
import { EmptyCardList } from "./components/emptytrainningCardList";

export const HomeScreen = () => {
  const { trainnings } = useUnit(GetTrainningsStore);
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      GetAllTrainningsUseCase.execute();
    }, [isFocused]),
  );

  return <>{trainnings.length == 0 ? <EmptyCardList /> : <TrainningCardList />}</>;
};
