import { createEvent } from "effector";

import { NewWorkoutFormFieldsProps } from "../../models/newWorkoutFormFieldsModel";

export const loadAllTrainnings = createEvent("loadAllTrainnings");
export const loadAllTrainningsDone = createEvent<NewWorkoutFormFieldsProps[]>("loadAllTrainningsDone");
export const loadAllTrainningsFail = createEvent<String>("loadAllTrainningsFail");
