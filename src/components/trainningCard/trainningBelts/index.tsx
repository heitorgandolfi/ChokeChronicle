import { Image, ScrollView } from "react-native";

import { beltImages } from "../../../shared/renderImages";
import { BeltsProps, TrainningCardProps } from "../../../models/trainningCardModel";

import { GeneralInfosText } from "../styles";

import { BeltsListContainer, TrainningFoughtBeltsContainer } from "./styles";

type TrainningBeltsProps = Pick<
  TrainningCardProps,
  "whiteBelt" | "blueBelt" | "purpleBelt" | "brownBelt" | "blackBelt"
>;

export const TranningBelts = ({
  whiteBelt,
  blueBelt,
  purpleBelt,
  brownBelt,
  blackBelt,
}: TrainningBeltsProps) => {
  const renderBeltImages = (belts: BeltsProps) => {
    let images = [];
    let keyCounter = 0;

    for (const belt in belts) {
      const count = parseInt(belts[belt as keyof BeltsProps]);
      for (let i = 0; i < count; i++) {
        images.push(<Image key={keyCounter++} source={beltImages[belt]} />);
      }
    }

    if (images.length === 0) {
      return <GeneralInfosText>No fights</GeneralInfosText>;
    }
    return images;
  };

  return (
    <TrainningFoughtBeltsContainer>
      <GeneralInfosText>Fought belts</GeneralInfosText>
      <ScrollView horizontal>
        <BeltsListContainer>
          {renderBeltImages({ whiteBelt, blueBelt, purpleBelt, brownBelt, blackBelt })}
        </BeltsListContainer>
      </ScrollView>
    </TrainningFoughtBeltsContainer>
  );
};
