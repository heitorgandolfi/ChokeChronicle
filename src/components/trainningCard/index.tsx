import { View, Image } from "react-native";

import { TrainningCardProps } from "../../models/trainningCardModel";
import { beltImages, trainningPerception } from "../../data/renderImages";

import {
  TrainningCardContainer,
  TrainningLocaleAndMoodContainer,
  DateInfoText,
  CityInfoText,
  GeneralInfosText,
  BeltsListContainer,
  TrainningFoughtBeltsContainer,
  TrainningStatisticsContainer,
} from "./styles";

const renderBeltImages = (belt: any) => {
  let images = [];
  let keyCounter = 0;
  for (let color in belt) {
    for (let i = 0; i < belt[color]; i++) {
      images.push(<Image key={keyCounter++} source={beltImages[color]} />);
    }
  }
  return images;
};

export const TrainningCard = ({
  date,
  city,
  mood,
  rolls,
  rests,
  subs,
  taps,
  belts,
}: TrainningCardProps) => {
  return (
    <TrainningCardContainer>
      <TrainningLocaleAndMoodContainer>
        <View>
          <DateInfoText>{date}</DateInfoText>
          <CityInfoText>{city}</CityInfoText>
        </View>

        <Image source={trainningPerception[mood]} />
      </TrainningLocaleAndMoodContainer>

      <TrainningFoughtBeltsContainer>
        <GeneralInfosText>Fought belts</GeneralInfosText>
        <BeltsListContainer>{renderBeltImages(belts)}</BeltsListContainer>
      </TrainningFoughtBeltsContainer>

      <TrainningStatisticsContainer>
        <GeneralInfosText>{`${rolls} Rolls`}</GeneralInfosText>
        <GeneralInfosText>{`${rests} Rests`}</GeneralInfosText>
        <GeneralInfosText>{`${subs} Subs`}</GeneralInfosText>
        <GeneralInfosText>{`${taps} Taps`}</GeneralInfosText>
      </TrainningStatisticsContainer>
    </TrainningCardContainer>
  );
};
