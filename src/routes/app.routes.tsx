import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/home";
import { NewWorkoutScreen } from "../screens/newWorkout";
import { BottomTabs } from "../components/bottomTabs/icons";
import { BottomTabStyle, HeaderStyle } from "../components/bottomTabs/styles/styles";

const { Screen, Navigator } = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        headerStyle: HeaderStyle,
        tabBarStyle: BottomTabStyle,
        headerTintColor: theme["gray-350"],
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="Home"
        options={{
          headerTitle: "Progress Tracking",
          tabBarIcon: ({ focused }) => <BottomTabs focused={focused} icons="home" />,
        }}
        component={HomeScreen}
      />

      <Screen
        name="NewWorkout"
        options={{
          headerTitle: "New Workout",
          tabBarIcon: ({ focused }) => <BottomTabs focused={focused} icons="plus" />,
        }}
        component={NewWorkoutScreen}
      />
    </Navigator>
  );
};
