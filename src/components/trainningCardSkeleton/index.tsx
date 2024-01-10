import { FlatList } from "react-native";

import { TrainningCardSkeleton } from "./component";
import { useUnit } from "effector-react";
import GetTrainningsStore from "../../stores/getTrainningsStore/getTrainningsStore";

export const ListOfTrainningCardSkeleton = () => {
  const { trainnings } = useUnit(GetTrainningsStore);
  const numberOfTrainningsCards = trainnings.length;

  const data = Array.from({ length: numberOfTrainningsCards });

  return (
    <FlatList
      data={data}
      keyExtractor={() => Math.random().toString()}
      renderItem={() => <TrainningCardSkeleton />}
    />
  );
};
