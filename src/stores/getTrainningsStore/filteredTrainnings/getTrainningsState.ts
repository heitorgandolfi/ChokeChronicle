import { NewWorkoutFormFieldsProps } from "../../../models/newWorkoutFormFieldsModel";

export interface GetFilteredTrainningsState {
  hasError: boolean;
  isLoading: boolean;
  errorMessage: string;
  filteredTrainnings: NewWorkoutFormFieldsProps[];
}
