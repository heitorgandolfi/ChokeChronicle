import { FlatList } from "react-native";
import { TrainningCardSkeleton } from "./component";

export const ListOfTrainningCardSkeleton = () => {
  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={() => Math.random().toString()}
      renderItem={() => <TrainningCardSkeleton />}
    />
  );
};
