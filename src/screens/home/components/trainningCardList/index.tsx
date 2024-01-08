import { FlatList } from "react-native";
import { useUnit } from "effector-react";

import { TrainningCard } from "../../../../components/trainningCard";
import GetTrainningsStore from "../../../../stores/getTrainningsStore/getTrainningsStore";

export const TrainningCardList = () => {
  const { trainnings } = useUnit(GetTrainningsStore);

  return (
    <FlatList
      data={trainnings}
      keyExtractor={(item) => Math.random().toString()}
      renderItem={({ item }) => (
        <TrainningCard
          whiteBelt={item.whiteBelt}
          blueBelt={item.blueBelt}
          purpleBelt={item.purpleBelt}
          brownBelt={item.brownBelt}
          blackBelt={item.blackBelt}
          date={item.trainningDate}
          city={item.trainningLocation}
          mood={item.mood}
          rolls={item.rolls}
          rests={item.rests}
          subs={item.subs}
          taps={item.taps}
        />
      )}
    />
  );
};
