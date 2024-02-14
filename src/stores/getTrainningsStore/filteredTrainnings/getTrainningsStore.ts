import { createStore } from "effector";
import { GetFilteredTrainningsState } from "./getTrainningsState";
import {
  loadFilteredTrainnings,
  loadFilteredTrainningsDone,
  loadFilteredTrainningsFail,
} from "./getTrainningsEvents";

const initialState: GetFilteredTrainningsState = {
  hasError: false,
  isLoading: false,
  errorMessage: "",
  filteredTrainnings: [],
};

export const GetFilteredTrainningsStore = createStore<GetFilteredTrainningsState>(initialState)
  .on(loadFilteredTrainnings, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadFilteredTrainningsDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    filteredTrainnings: data,
  }))
  .on(loadFilteredTrainningsFail, (_, data) => ({
    hasError: true,
    isLoading: false,
    errorMessage: data?.toString(),
    filteredTrainnings: [],
  }));
