import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";
import { defaultTheme } from "./src/styles/themes/default";

export default function App() {
  const [LoadFonts] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const handleFontsLoading = () => {
    if (!LoadFonts) {
      return (
        <ActivityIndicator
          style={{ flex: 1, backgroundColor: defaultTheme["primary-dark"] }}
          color={defaultTheme.secondary}
        />
      );
    }

    return <Routes />;
  };

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={defaultTheme}>{handleFontsLoading()}</ThemeProvider>
      </GestureHandlerRootView>
      <StatusBar backgroundColor="transparent" translucent />
    </>
  );
}
