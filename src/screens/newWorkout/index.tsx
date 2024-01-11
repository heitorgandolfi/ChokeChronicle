import { ScrollView } from "react-native";

import { NewWorkoutForm } from "./newWorkoutForm";

export const NewWorkoutScreen = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <NewWorkoutForm />
    </ScrollView>
  );
};
