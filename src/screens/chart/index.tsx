import { useUnit } from "effector-react";
import { useCallback, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ScrollView, ActivityIndicator } from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

import { GetChartDataUseCase } from "../../useCases/getChartDataUseCase";
import { GetChartDataStore } from "../../stores/getTrainningsStore/chartDataTrainnings/getChartDataStore";

import { ChartComponent } from "./components/renderChart";

import {
  Container,
  Title,
  EmptyDataText,
  EmptyDataIcon,
  EmptyDataContainer,
  PickerStyles,
  LoadingIndicator,
} from "./styles";

export type SelectedChartCategory = "belts" | "statistics";

export const ChartScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedChartCategory>("belts");
  const [selectedCategoryInfo, setSelectedCategoryInfo] = useState("");

  const { chartData, totalData, isLoading } = useUnit(GetChartDataStore);

  const isFocused = useIsFocused();

  const handleCardOnPress = (detailsLabel: string) => {
    setSelectedCategoryInfo((prev) => (prev === detailsLabel ? "" : detailsLabel));
  };

  const renderEmptyData = () => (
    <EmptyDataContainer>
      <EmptyDataIcon name="database-off" />
      <EmptyDataText>You do not have data{"\n"} to be visualized in the graph.</EmptyDataText>
    </EmptyDataContainer>
  );

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    } else if (totalData === 0) {
      return renderEmptyData();
    } else {
      return (
        <ChartComponent
          chartData={chartData}
          totalData={totalData}
          selectedCategory={selectedCategory}
          selectedCategoryInfo={selectedCategoryInfo}
          handleCardOnPress={handleCardOnPress}
        />
      );
    }
  };

  useFocusEffect(
    useCallback(() => {
      GetChartDataUseCase.execute(selectedCategory);

      return async () => {
        await GetChartDataUseCase.reset();
      };
    }, [isFocused, selectedCategory]),
  );

  return (
    <ScrollView>
      <Container>
        <Title>Category</Title>

        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue: SelectedChartCategory) => setSelectedCategory(itemValue)}
          style={PickerStyles}
        >
          <Picker.Item label="Belt Totals" value="belts" />
          <Picker.Item label="Activity Metrics" value="statistics" />
        </Picker>
      </Container>

      {renderContent()}
    </ScrollView>
  );
};
