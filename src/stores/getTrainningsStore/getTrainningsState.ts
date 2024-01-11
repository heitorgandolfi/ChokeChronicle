import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

export interface GetAllTrainningsState {
  hasError: boolean;
  isLoading: boolean;
  errorMessage: string;
  trainnings: NewWorkoutFormFieldsProps[];
}
