import { NewWorkoutFormFieldsProps } from "../../../models/newWorkoutFormFieldsModel";

export const filterTrainnings = (
  trainnings: NewWorkoutFormFieldsProps[],
  filteredTrainnings: NewWorkoutFormFieldsProps[],
): NewWorkoutFormFieldsProps[] => {
  if (filteredTrainnings.length > 0) return filteredTrainnings;
  return trainnings;
};
