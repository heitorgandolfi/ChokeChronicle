export interface ChartDataProps {
  x: number;
  y: number;
  label: string;
}

export interface GetChartDataTrainningsState {
  hasError: boolean;
  isLoading: boolean;
  errorMessage: string;
  totalData: number;
  chartData: ChartDataProps[];
}
