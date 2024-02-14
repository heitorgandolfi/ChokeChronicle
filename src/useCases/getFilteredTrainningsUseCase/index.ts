import { TrainningRepository } from "../../data/Repositories";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import {
  loadFilteredTrainnings,
  loadFilteredTrainningsDone,
  loadFilteredTrainningsFail,
} from "../../stores/getTrainningsStore/filteredTrainnings/getTrainningsEvents";

type Props = {
  days: string;
};

const execute = async ({ days }: Props): Promise<void> => {
  loadFilteredTrainnings();

  return TrainningRepository.getFilteredTrainnings(days)
    .then((FilteredTrainnings: NewWorkoutFormFieldsProps[]) => {
      loadFilteredTrainningsDone(FilteredTrainnings);
    })
    .catch(({ message }) => {
      loadFilteredTrainningsFail(message);
    });
};

export const GetFilteredTrainningsUseCase = {
  execute,
};
