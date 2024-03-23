import { TrainningRepository } from "../../data/Repositories";
import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";
import { loadTrainning, loadTrainningFail } from "../../stores/trainningStore/trainningEvents";

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

  const removeDecimal = (value: string) => value.replace(/\..*/, "");

  const convertedData = {
    trainningDate,
    trainningLocation,
    whiteBelt: removeDecimal(whiteBelt),
    blueBelt: removeDecimal(blueBelt),
    purpleBelt: removeDecimal(purpleBelt),
    brownBelt: removeDecimal(brownBelt),
    blackBelt: removeDecimal(blackBelt),
    rolls: removeDecimal(rolls) || "0",
    rests: removeDecimal(rests) || "0",
    subs: removeDecimal(subs) || "0",
    taps: removeDecimal(taps) || "0",
    mood,
  };

  try {
    await TrainningRepository.addTrainningToDatabase(convertedData);
  } catch ({ error }: any) {
    loadTrainningFail(error.message);
  }
};

const AddTrainningUseCase = {
  execute,
};

export default AddTrainningUseCase;
