import { TrainningRepository } from "../../data/Repositories";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import {
  loadAllTrainnings,
  loadAllTrainningsDone,
  loadAllTrainningsFail,
} from "../../stores/getTrainningsStore/getTrainningsEvents";

const execute = async (): Promise<void> => {
  loadAllTrainnings();

  return TrainningRepository.getAllTrainningsFromDatabase()
    .then((allTrainnings: NewWorkoutFormFieldsProps[]) => {
      loadAllTrainningsDone(allTrainnings);
    })
    .catch(({ message }) => {
      loadAllTrainningsFail(message);
    });
};

export const GetAllTrainningsUseCase = {
  execute,
};
