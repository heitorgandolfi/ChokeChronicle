import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { defaultTheme } from "../styles/themes/default";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const appDefaultTheme = DefaultTheme;
  appDefaultTheme.colors.background = defaultTheme["primary-dark"];

  return (
    <NavigationContainer theme={appDefaultTheme}>
      <AppRoutes />
    </NavigationContainer>
  );
};
