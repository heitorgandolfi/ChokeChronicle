import { FlatList } from "react-native";
import { TrainingCard } from "../../components/trainingCard";

const mockData = [
  {
    id: "1",
    date: "29/11/23",
    city: "São Paulo",
    mood: "satisfied",
    fights: { white: 2, blue: 1, purple: 1, brown: 1, black: 1 },
    rolls: 6,
    rests: 2,
    subs: 7,
    taps: 2,
  },
  {
    id: "2",
    date: "01/12/23",
    city: "Ribeirão Preto",
    mood: "neutral",
    fights: { white: 4, blue: 1, purple: 0, brown: 0, black: 0 },
    rolls: 5,
    rests: 0,
    subs: 1,
    taps: 3,
  },
  {
    id: "3",
    date: "04/12/23",
    city: "Ribeirão Preto",
    mood: "dissatisfied",
    fights: { white: 1, blue: 4, purple: 0, brown: 0, black: 0 },
    rolls: 5,
    rests: 0,
    subs: 1,
    taps: 3,
  },
  {
    id: "4",
    date: "05/12/23",
    city: "Ribeirão Preto",
    mood: "satisfied",
    fights: { white: 3, blue: 1, purple: 0, brown: 0, black: 1 },
    rolls: 5,
    rests: 0,
    subs: 5,
    taps: 0,
  },
];

export const HomeScreen = () => {
  return (
    <FlatList
      data={mockData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrainingCard
          belts={item.fights}
          date={item.date}
          city={item.city}
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
