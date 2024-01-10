import { createStore } from "effector";

import { DeleteTrainningState } from "./deleteTrainningsState";
import {
  loadDeleteTrainning,
  loadDeleteTrainningDone,
  loadDeleteTrainningFail,
} from "./deleteTrainningsEvents";

const initialState: DeleteTrainningState = {
  hasError: false,
  isLoading: false,
  errorMessage: "",
};

const DeleteTrainningStore = createStore<DeleteTrainningState>(initialState)
  .on(loadDeleteTrainning, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadDeleteTrainningDone, (state) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadDeleteTrainningFail, (_, data) => ({
    hasError: true,
    isLoading: false,
    errorMessage: data?.toString(),
  }));

export default DeleteTrainningStore;
