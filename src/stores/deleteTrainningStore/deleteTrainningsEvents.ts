import { createEvent } from "effector";

export const loadDeleteTrainning = createEvent("loadDeleteTrainning");
export const loadDeleteTrainningDone = createEvent("loadDeleteTrainningDone");
export const loadDeleteTrainningFail = createEvent<String>("loadAllTrainningsFail");
