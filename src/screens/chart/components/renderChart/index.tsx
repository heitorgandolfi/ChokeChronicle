import { View } from "react-native";
import { VictoryPie } from "victory-native";

import { colorSchemes } from "../../../../shared/utils/chartColorScheme";
import { ChartDataProps } from "../../../../stores/getTrainningsStore/chartDataTrainnings/getChartDataState";

import { SelectedChartCategory } from "../..";

import { MetricsCard, MetricsCardContent, MetricsCardPercentage, MetricsCardText } from "./styles";

interface ChartComponentProps {
  chartData: ChartDataProps[];
  totalData: number;
  selectedCategory: SelectedChartCategory;
  selectedCategoryInfo: string;
  handleCardOnPress: (detailsLabel: string) => void;
}

export const ChartComponent = ({
  chartData,
  totalData,
  selectedCategory,
  selectedCategoryInfo,
  handleCardOnPress,
}: ChartComponentProps) => {
  const renderChart = () => {
    return (
      <VictoryPie
        key={selectedCategory}
        data={chartData}
        innerRadius={90}
        labelRadius={1000000000}
        colorScale={colorSchemes[selectedCategory]}
        style={{
          data: {
            fillOpacity: ({ datum }) =>
              datum.label === selectedCategoryInfo || selectedCategoryInfo === "" ? 1 : 0.2,
          },
        }}
      />
    );
  };

  const renderPercentageCondition = (item: ChartDataProps) => {
    if (selectedCategory === "belts") {
      return (
        <MetricsCardPercentage>
          {`(${((item.y / totalData) * 100).toFixed(1)}%)`}
        </MetricsCardPercentage>
      );
    }
    return null;
  };

  const renderMetricsCard = (item: ChartDataProps, index: number) => {
    return (
      <MetricsCard
        key={index}
        leftBorderColor={colorSchemes[selectedCategory][index]}
        onPress={() => handleCardOnPress(item.label)}
        activeOpacity={0.9}
      >
        <MetricsCardText>{item.label}</MetricsCardText>

        <MetricsCardContent>
          <MetricsCardText>{item.y}</MetricsCardText>
          {renderPercentageCondition(item)}
        </MetricsCardContent>
      </MetricsCard>
    );
  };

  return (
    <>
      {renderChart()}
      {chartData.map((item, index) => renderMetricsCard(item, index))}
    </>
  );
};
