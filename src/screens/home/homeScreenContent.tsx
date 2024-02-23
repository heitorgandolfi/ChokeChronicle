import React from "react";

import { TrainningCardList } from "./components/trainningCardList";
import { EmptyCardList } from "./components/emptytrainningCardList";
import { FilterMenu } from "./components/bottomSheetFilter/filterMenu";

import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import { ListOfTrainningCardSkeleton } from "../../components/trainningCardSkeleton";

interface HomeScreenContentProps {
  trainnings: NewWorkoutFormFieldsProps[];
  isLoading: boolean;
  onFilterButtonPress: () => void;
}

export const HomeScreenContent = ({
  trainnings,
  isLoading,
  onFilterButtonPress,
}: HomeScreenContentProps) => {
  if (trainnings.length === 0) return <EmptyCardList />;

  if (isLoading) return <ListOfTrainningCardSkeleton />;

  return (
    <>
      <FilterMenu trainningsCount={trainnings.length} onButtonPress={onFilterButtonPress} />
      <TrainningCardList />
    </>
  );
};
