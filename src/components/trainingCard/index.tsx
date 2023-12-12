import { View, Image } from "react-native";

import { TrainingCardProps } from "../../models/trainingCardModel";
import { beltImages, trainingPerception } from "../../data/renderImages";

import {
  TrainingCardContainer,
  TrainingLocaleAndMoodContainer,
  DateInfoText,
  CityInfoText,
  GeneralInfosText,
  BeltsListContainer,
  TrainingFoughtBeltsContainer,
  TrainingStatisticsContainer,
} from "./styles";

const renderBeltImages = (belt: any) => {
  let images = [];
  for (let color in belt) {
    for (let i = 0; i < belt[color]; i++) {
      images.push(<Image source={beltImages[color]} />);
    }
  }
  return images;
};

export const TrainingCard = ({
  date,
  city,
  mood,
  rolls,
  rests,
  subs,
  taps,
  belts,
}: TrainingCardProps) => {
  return (
    <TrainingCardContainer>
      <TrainingLocaleAndMoodContainer>
        <View>
          <DateInfoText>{date}</DateInfoText>
          <CityInfoText>{city}</CityInfoText>
        </View>

        <Image source={trainingPerception[mood]} />
      </TrainingLocaleAndMoodContainer>

      <TrainingFoughtBeltsContainer>
        <GeneralInfosText>Fought belts</GeneralInfosText>
        <BeltsListContainer>{renderBeltImages(belts)}</BeltsListContainer>
      </TrainingFoughtBeltsContainer>

      <TrainingStatisticsContainer>
        <GeneralInfosText>{`${rolls} Rolls`}</GeneralInfosText>
        <GeneralInfosText>{`${rests} Rests`}</GeneralInfosText>
        <GeneralInfosText>{`${subs} Subs`}</GeneralInfosText>
        <GeneralInfosText>{`${taps} Taps`}</GeneralInfosText>
      </TrainingStatisticsContainer>
    </TrainingCardContainer>
  );
};
