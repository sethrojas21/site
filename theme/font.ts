// theme/font.ts
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const scale = width / 375;

export const FontSize = {
  xxs: Math.round(8 * scale),
  xs: Math.round(12 * scale),
  sm: Math.round(14 * scale),
  md: Math.round(16 * scale),
  lg: Math.round(18 * scale),
  xl: Math.round(22 * scale),
  xxl: Math.round(28 * scale),
};