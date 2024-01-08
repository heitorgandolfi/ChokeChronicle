import { createEvent } from "effector";

import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

export const loadTrainning = createEvent("loadTrainning");
export const loadTrainningDone = createEvent<NewWorkoutFormFieldsProps>("loadTrainningDone");
export const loadTrainningFail = createEvent<String>("loadTrainningFail");
