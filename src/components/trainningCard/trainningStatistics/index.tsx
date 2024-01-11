import { GeneralInfosText } from "../styles";
import { TrainningCardProps } from "../../../models/trainningCardModel";

import { TrainningStatisticsContainer } from "./styles";

type TrainningStatisticsProps = Pick<TrainningCardProps, "rolls" | "rests" | "subs" | "taps">;

export const TrainningStatistics = ({ rolls, rests, subs, taps }: TrainningStatisticsProps) => {
  return (
    <TrainningStatisticsContainer>
      <GeneralInfosText>{`${rolls} Rolls`}</GeneralInfosText>
      <GeneralInfosText>{`${rests} Rests`}</GeneralInfosText>
      <GeneralInfosText>{`${subs} Subs`}</GeneralInfosText>
      <GeneralInfosText>{`${taps} Taps`}</GeneralInfosText>
    </TrainningStatisticsContainer>
  );
};
