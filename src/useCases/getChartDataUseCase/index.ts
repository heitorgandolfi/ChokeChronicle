import { TrainningRepository } from "../../data/Repositories";
import {
  loadChartData,
  loadChartDataDone,
  loadChartDataFail,
} from "../../stores/getTrainningsStore/chartDataTrainnings/getChartDataEvents";

const execute = async (queryParam: string): Promise<void> => {
  loadChartData();

  return TrainningRepository.getChartData(queryParam)
    .then((chartData: any) => {
      const formattedData = Object.keys(chartData).map((key, index) => ({
        x: index + 1,
        y: chartData[key],
        label: key
          .replace(/^SUM\(|\)$/g, "")
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .toLowerCase(),
      }));
      loadChartDataDone(formattedData);
    })
    .catch(({ message }) => {
      loadChartDataFail(message);
    });
};

const reset = async (): Promise<void> => {
  loadChartDataDone([]);
};

export const GetChartDataUseCase = {
  execute,
  reset,
};
