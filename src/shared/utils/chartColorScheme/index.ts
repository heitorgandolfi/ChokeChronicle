import { defaultTheme as theme } from "../../../styles/themes/default";

export const colorSchemes: { [key in any]: string[] } = {
  belts: [
    theme["gray-50"],
    theme["blue-550"],
    theme["purple-500"],
    theme["brown-600"],
    theme.black,
  ],
  subs_taps: [theme.tertiary, theme["secondary-dark"]],
  rolls_rests: [theme["blue-450"], theme["yellow-500"]],
};
