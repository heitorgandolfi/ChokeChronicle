import { TrainningRepository } from "../../data/Repositories";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import {
  loadTrainning,
  loadTrainningDone,
  loadTrainningFail,
} from "../../stores/trainningStore/trainningEvents";

const execute = async ({
  trainningDate,
  trainningLocation,
  whiteBelt,
  blueBelt,
  purpleBelt,
  brownBelt,
  blackBelt,
  rolls,
  rests,
  subs,
  taps,
  mood,
}: NewWorkoutFormFieldsProps): Promise<void> => {
  loadTrainning();

  return TrainningRepository.addTrainningToDatabase({
    trainningDate,
    trainningLocation,
    whiteBelt,
    blueBelt,
    purpleBelt,
    brownBelt,
    blackBelt,
    rolls,
    rests,
    subs,
    taps,
    mood,
  })
    .then(() => {
      // loadTrainningDone("fail");
    })
    .catch(({ message }) => {
      loadTrainningFail(message);
    });
};

const AddTrainningUseCase = {
  execute,
};

export default AddTrainningUseCase;
