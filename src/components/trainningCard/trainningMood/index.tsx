import { Image, View } from "react-native";

import { trainningPerception } from "../../../shared/renderImages";
import { TrainningCardProps } from "../../../models/trainningCardModel";

import { CityInfoText, DateInfoText, TrainningLocaleAndMoodContainer } from "./styles";

type TrainningMoodProps = Pick<TrainningCardProps, "date" | "city" | "mood">;

export const TrainningMood = ({ date, city, mood }: TrainningMoodProps) => {
  return (
    <TrainningLocaleAndMoodContainer>
      <View style={{ flex: 1 }}>
        <DateInfoText>{date}</DateInfoText>
        <CityInfoText numberOfLines={1}>{city}</CityInfoText>
      </View>
      <Image source={trainningPerception[mood]} />
    </TrainningLocaleAndMoodContainer>
  );
};
