import { useUnit } from "effector-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";

import { GetFilteredTrainningsUseCase } from "../../../../useCases/getFilteredTrainningsUseCase";
import { GetFilteredTrainningsStore } from "../../../../stores/getTrainningsStore/filteredTrainnings/getTrainningsStore";
import { loadResetFilteredTrainningsDone } from "../../../../stores/getTrainningsStore/filteredTrainnings/getTrainningsEvents";

import { FilterHeader } from "./filterHeader";
import { RadioButtonController } from "./radioButton";

import {
  ApplyFilterButton,
  ApplyFilterButtonText,
  BottomSheetContainer,
  BottomSheetFilterTopicTitle,
  BottomSheetScrollViewContainer,
  LoadingIndicator,
  RadioButtonFilterByDaysContainer,
} from "./styles";

export const BottomSheetFilter = forwardRef((_, ref) => {
  const { isLoading } = useUnit(GetFilteredTrainningsStore);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetSnapPoints = useMemo(() => ["55%"], []);

  const { control, handleSubmit, setValue, reset, watch } = useForm();
  const anyFilterIsSelected = watch("days") === undefined;

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />,
    [],
  );

  useImperativeHandle(ref, () => ({
    openBottomSheetFilter: () => {
      bottomSheetRef.current?.expand();
    },
  }));

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const handleClearAllFilters = () => {
    loadResetFilteredTrainningsDone();
    reset();

    handleCloseBottomSheet();
  };

  const handleFilterSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const { days } = formData;

    await GetFilteredTrainningsUseCase.execute({ days });

    handleCloseBottomSheet();
  };

  return (
    <BottomSheetContainer
      ref={bottomSheetRef}
      snapPoints={bottomSheetSnapPoints}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollViewContainer>
        <FilterHeader
          handleCloseBottomSheet={handleCloseBottomSheet}
          handleClearAllFilters={handleClearAllFilters}
        />

        <BottomSheetFilterTopicTitle>Recent Days</BottomSheetFilterTopicTitle>

        <RadioButtonFilterByDaysContainer>
          <RadioButtonController
            control={control}
            name="days"
            value="7"
            label="7 days"
            setValue={setValue}
          />

          <RadioButtonController
            control={control}
            name="days"
            value="15"
            label="15 days"
            setValue={setValue}
          />

          <RadioButtonController
            control={control}
            name="days"
            value="30"
            label="30 days"
            setValue={setValue}
          />
        </RadioButtonFilterByDaysContainer>
      </BottomSheetScrollViewContainer>

      <ApplyFilterButton
        disabled={anyFilterIsSelected}
        onPress={handleSubmit(handleFilterSubmit)}
        activeOpacity={0.9}
      >
        <ApplyFilterButtonText disabled={anyFilterIsSelected}>
          {isLoading ? <LoadingIndicator /> : "Apply"}
        </ApplyFilterButtonText>
      </ApplyFilterButton>
    </BottomSheetContainer>
  );
});
