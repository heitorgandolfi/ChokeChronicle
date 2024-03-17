import React from "react";

import { TrainningCardList } from "./components/trainningCardList";
import { EmptyCardList } from "./components/emptytrainningCardList";
import { FilterMenu } from "./components/bottomSheetFilter/filterMenu";

import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

import { LoadingIndicator, LoadingIndicatorContainer } from "./styles";

interface HomeScreenContentProps {
  trainnings: NewWorkoutFormFieldsProps[];
  isLoading: boolean;
  onFilterButtonPress: () => void;
  hasAnyFilter: boolean;
}

export const HomeScreenContent = ({
  trainnings,
  isLoading,
  onFilterButtonPress,
  hasAnyFilter,
}: HomeScreenContentProps) => {
  const homeScreenContentRender = () => {
    if (isLoading)
      return (
        <LoadingIndicatorContainer>
          <LoadingIndicator />
        </LoadingIndicatorContainer>
      );

    if (trainnings.length === 0) return <EmptyCardList />;
    return (
      <>
        <FilterMenu
          trainningsCount={trainnings.length}
          onButtonPress={onFilterButtonPress}
          hasAnyFilter={hasAnyFilter}
        />
        <TrainningCardList />
      </>
    );
  };

  return homeScreenContentRender();
};
