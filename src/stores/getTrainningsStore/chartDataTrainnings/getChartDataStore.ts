import { createStore } from "effector";

import { GetChartDataTrainningsState } from "./getChartDataState";
import { loadChartData, loadChartDataDone, loadChartDataFail } from "./getChartDataEvents";

const initialState: GetChartDataTrainningsState = {
  hasError: false,
  isLoading: false,
  errorMessage: "",
  totalData: 0,
  chartData: [],
};

export const GetChartDataStore = createStore<GetChartDataTrainningsState>(initialState)
  .on(loadChartData, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadChartDataDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    totalData: data.reduce((acc, currentItem) => {
      return acc + currentItem.y;
    }, 0),
    chartData: data,
  }))
  .on(loadChartDataFail, (_, data) => ({
    hasError: true,
    isLoading: false,
    errorMessage: data?.toString(),
    totalData: 0,
    chartData: [],
  }));
