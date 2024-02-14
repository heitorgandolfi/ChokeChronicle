import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";

import { FilterHeader } from "./filterHeader";
import { RadioButtonController } from "./radioButton";

import {
  ApplyFilterButton,
  ApplyFilterButtonText,
  BottomSheetContainer,
  BottomSheetFilterTopicTitle,
  BottomSheetScrollViewContainer,
  RadioButtonFilterByDaysContainer,
} from "./styles";
import { TrainningRepository } from "../../../../data/Repositories";

export const BottomSheetFilter = forwardRef((_, ref) => {
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
    reset();
    bottomSheetRef.current?.close();
  };

  const handleFilterSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const { days } = formData;

    const filteredTrainningsByDays = await TrainningRepository.getTrainningsByLastNDays({ days });
    console.log(filteredTrainningsByDays);

    reset();
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheetContainer
      ref={bottomSheetRef}
      snapPoints={bottomSheetSnapPoints}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetScrollViewContainer>
        <FilterHeader handleCloseBottomSheet={handleCloseBottomSheet} />

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
        <ApplyFilterButtonText disabled={anyFilterIsSelected}>Apply</ApplyFilterButtonText>
      </ApplyFilterButton>
    </BottomSheetContainer>
  );
});
