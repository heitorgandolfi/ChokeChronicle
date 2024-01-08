import { useEffect } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { defaultTheme } from "../styles/themes/default";
import { AppRoutes } from "./app.routes";
import { initDataBase } from "../data/dbConfig";

export const Routes = () => {
  const appDefaultTheme = DefaultTheme;
  appDefaultTheme.colors.background = defaultTheme["primary-dark"];

  useEffect(() => {
    initDataBase();
  }, []);

  return (
    <NavigationContainer theme={appDefaultTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
};
