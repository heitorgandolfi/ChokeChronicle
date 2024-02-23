import Toast from "react-native-toast-message";

import { TrainningRepository } from "../../data/Repositories";
import {
  loadFilteredTrainnings,
  loadFilteredTrainningsDone,
  loadFilteredTrainningsFail,
} from "../../stores/getTrainningsStore/filteredTrainnings/getTrainningsEvents";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

type Props = {
  days: string;
};

const showToast = () => {
  Toast.show({
    autoHide: true,
    visibilityTime: 3500,
    type: "defaultToast",
    text1: "Ops...",
    text2: "There is no trainnings in this time interval",
    position: "bottom",
  });
};

const execute = async ({ days }: Props): Promise<void> => {
  loadFilteredTrainnings();

  return TrainningRepository.getFilteredTrainnings(days)
    .then((FilteredTrainnings: NewWorkoutFormFieldsProps[]) => {
      if (FilteredTrainnings.length === 0) showToast();
      loadFilteredTrainningsDone(FilteredTrainnings);
    })
    .catch(({ message }) => {
      loadFilteredTrainningsFail(message);
    });
};

export const GetFilteredTrainningsUseCase = {
  execute,
};
