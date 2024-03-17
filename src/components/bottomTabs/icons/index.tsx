import React from "react";
import { useTheme } from "styled-components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type BottomTabsTypes = "home" | "plus" | "chart-line";

type BottomTabsProps = {
  icons?: BottomTabsTypes;
  focused: boolean;
};

const setIcon = (iconName: string) => {
  return {
    home: "home-outline",
    plus: "plus",
    "chart-line": "chart-line",
  }[iconName];
};

export const BottomTabs = ({ icons, focused }: BottomTabsProps) => {
  const theme = useTheme();

  return (
    <MaterialCommunityIcons
      name={setIcon(icons as BottomTabsTypes) as BottomTabsTypes}
      size={30}
      color={focused ? theme.secondary : theme["primary-lighter"]}
    />
  );
};
