import { TrainningRepository } from "../../data/Repositories";
import { GetAllTrainningsUseCase } from "../getAllTrainningsUseCase";
import {
  loadDeleteTrainning,
  loadDeleteTrainningDone,
  loadDeleteTrainningFail,
} from "../../stores/deleteTrainningStore/deleteTrainningsEvents";

const execute = async (id: number): Promise<void> => {
  loadDeleteTrainning();

  return TrainningRepository.deleteTrainningFromDatabase(id)
    .then(() => {
      GetAllTrainningsUseCase.execute();
      loadDeleteTrainningDone();
    })
    .catch(({ message }) => {
      loadDeleteTrainningFail(message);
    });
};

const DeleteTrainningUseCase = {
  execute,
};

export default DeleteTrainningUseCase;
