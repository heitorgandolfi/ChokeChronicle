import { createStore } from "effector";
import { TrainningState } from "./trainningState";
import { loadTrainning, loadTrainningDone, loadTrainningFail } from "./trainningEvents";

const initialState: TrainningState = {
  hasError: false,
  isLoading: false,
  errorMessage: "",
  trainningInfos: [],
};

const TrainningStore = createStore<TrainningState>(initialState)
  .on(loadTrainning, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadTrainningDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    trainningInfos: state.trainningInfos ? [...state.trainningInfos, data] : [data],
  }))
  .on(loadTrainningFail, (_, data) => ({
    hasError: true,
    isLoading: false,
    errorMessage: data?.toString(),
    trainningInfos: [],
  }));

export default TrainningStore;
