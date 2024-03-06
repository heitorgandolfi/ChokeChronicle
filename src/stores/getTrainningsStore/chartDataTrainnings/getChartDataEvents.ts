import { createEvent } from "effector";
import { ChartDataProps } from "./getChartDataState";

export const loadChartData = createEvent("loadChartData");
export const loadChartDataDone = createEvent<ChartDataProps[]>("loadChartDataDone");
export const loadChartDataFail = createEvent<String>("loadChartDataFail");
