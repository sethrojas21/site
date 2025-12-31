// theme/font.ts
import { useWindowDimensions } from "react-native";

export function useFontSize() {
  const { width } = useWindowDimensions();
  const scale = width && width > 0 ? width / 375 : 1;

  return {
    xxs: Math.max(8, Math.round(8 * scale)),
    xs: Math.max(12, Math.round(12 * scale)),
    sm: Math.max(14, Math.round(14 * scale)),
    md: Math.max(16, Math.round(16 * scale)),
    lg: Math.max(18, Math.round(18 * scale)),
    xl: Math.max(22, Math.round(22 * scale)),
    xxl: Math.max(28, Math.round(28 * scale)),
  };
}