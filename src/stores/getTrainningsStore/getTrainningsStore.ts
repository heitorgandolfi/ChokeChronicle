import { createStore } from "effector";
import { GetAllTrainningsState } from "./getTrainningsState";
import {
  loadAllTrainnings,
  loadAllTrainningsDone,
  loadAllTrainningsFail,
} from "./getTrainningsEvents";

const initialState: GetAllTrainningsState = {
  hasError: false,
  isLoading: false,
  errorMessage: "",
  trainnings: [],
};

const GetTrainningsStore = createStore<GetAllTrainningsState>(initialState)
  .on(loadAllTrainnings, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadAllTrainningsDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    trainnings: data,
  }))
  .on(loadAllTrainningsFail, (_, data) => ({
    hasError: true,
    isLoading: false,
    errorMessage: data?.toString(),
    trainnings: [],
  }));

export default GetTrainningsStore;
