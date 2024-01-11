import { FlatList } from "react-native";
import { useUnit } from "effector-react";

import { TrainningCard } from "../../../../components/trainningCard";
import DeleteTrainningUseCase from "../../../../useCases/deleteTrainningUseCase";
import GetTrainningsStore from "../../../../stores/getTrainningsStore/getTrainningsStore";

export const TrainningCardList = () => {
  const { trainnings } = useUnit(GetTrainningsStore);

  const handleCardTrainningDelete = async (id: number) => {
    await DeleteTrainningUseCase.execute(id);
  };

  return (
    <FlatList
      data={trainnings}
      keyExtractor={() => Math.random().toString()}
      renderItem={({ item }) => (
        <TrainningCard
          id={item.Id!}
          onDeleted={() => handleCardTrainningDelete(item.Id!)}
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
