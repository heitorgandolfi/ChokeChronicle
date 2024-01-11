import { useCallback } from "react";
import { useUnit } from "effector-react";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { GetAllTrainningsUseCase } from "../../useCases/getAllTrainningsUseCase";
import GetTrainningsStore from "../../stores/getTrainningsStore/getTrainningsStore";
import { ListOfTrainningCardSkeleton } from "../../components/trainningCardSkeleton";

import { TrainningCardList } from "./components/trainningCardList";
import { EmptyCardList } from "./components/emptytrainningCardList";

export const HomeScreen = () => {
  const { trainnings, isLoading } = useUnit(GetTrainningsStore);
  const isFocused = useIsFocused();

  const handleHomeScreenLoading = () => {
    if (trainnings.length == 0) return <EmptyCardList />;

    if (isLoading) return <ListOfTrainningCardSkeleton />;

    return <TrainningCardList />;
  };

  useFocusEffect(
    useCallback(() => {
      GetAllTrainningsUseCase.execute();
    }, [isFocused]),
  );

  return handleHomeScreenLoading();
};
