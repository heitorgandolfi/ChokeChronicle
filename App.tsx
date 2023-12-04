import { ThemeProvider } from "styled-components/native";

import { Routes } from "./src/routes";
import { defaultTheme } from "./src/styles/themes/default";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}
