import { createEvent } from "effector";

import { NewWorkoutFormFieldsProps } from "../../../models/newWorkoutFormFieldsModel";

export const loadFilteredTrainnings = createEvent("loadFilteredTrainnings");
export const loadFilteredTrainningsDone = createEvent<NewWorkoutFormFieldsProps[]>(
  "loadFilteredTrainningsDone",
);
export const loadResetFilteredTrainningsDone = createEvent("loadResetFilteredTrainningsDone");
export const loadFilteredTrainningsFail = createEvent<String>("loadFilteredTrainningsFail");
