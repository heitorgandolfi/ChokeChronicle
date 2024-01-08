import { View, Image } from "react-native";

import { BeltsProps, TrainningCardProps } from "../../models/trainningCardModel";
import { beltImages, trainningPerception } from "../../shared/renderImages";

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
import { ScrollView } from "react-native";

const renderBeltImages = (belts: BeltsProps) => {
  let images: JSX.Element[] = [];
  let keyCounter = 0;

  for (const belt in belts) {
    const count = parseInt(belts[belt as keyof BeltsProps]);
    for (let i = 0; i < count; i++) {
      images.push(<Image key={keyCounter++} source={beltImages[belt]} />);
    }
  }
  return images;
};

export const TrainningCard = ({
  date,
  city,
  mood,
  whiteBelt,
  blueBelt,
  purpleBelt,
  brownBelt,
  blackBelt,
  rolls,
  rests,
  subs,
  taps,
}: TrainningCardProps) => {
  return (
    <TrainningCardContainer>
      <TrainningLocaleAndMoodContainer>
        <View style={{ flex: 1 }}>
          <DateInfoText>{date}</DateInfoText>
          <CityInfoText numberOfLines={1}>{city}</CityInfoText>
        </View>

        <Image source={trainningPerception[mood]} />
      </TrainningLocaleAndMoodContainer>

      <TrainningFoughtBeltsContainer>
        <GeneralInfosText>Fought belts</GeneralInfosText>
        <ScrollView horizontal>
          <BeltsListContainer>
            {renderBeltImages({ whiteBelt, blueBelt, purpleBelt, brownBelt, blackBelt })}
          </BeltsListContainer>
        </ScrollView>
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
