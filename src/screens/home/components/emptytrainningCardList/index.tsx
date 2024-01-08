import { useNavigation } from "@react-navigation/native";

import { EmptyCardListButton, EmptyCardListContainer, EmptyCardListText } from "./styles";

export const EmptyCardList = () => {
  const navigation = useNavigation();

  const handleGoToTrainningScreen = () => {
    navigation.navigate("NewWorkout");
  };

  return (
    <EmptyCardListContainer>
      <EmptyCardListText>You don't have any trainning registered yet</EmptyCardListText>
      <EmptyCardListText>Add your first workouts to start tracking your progress</EmptyCardListText>

      <EmptyCardListButton onPress={handleGoToTrainningScreen} activeOpacity={0.9}>
        <EmptyCardListText>Start</EmptyCardListText>
      </EmptyCardListButton>
    </EmptyCardListContainer>
  );
};
