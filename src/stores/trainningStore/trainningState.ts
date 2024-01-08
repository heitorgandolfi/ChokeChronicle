import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

export interface TrainningState {
  hasError: boolean;
  isLoading: boolean;
  errorMessage: string;
  trainningInfos: NewWorkoutFormFieldsProps[];
}
