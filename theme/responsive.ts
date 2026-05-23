import { useWindowDimensions } from "react-native";

export const MOBILE_BREAKPOINT = 720;

export function useResponsive() {
  const { width } = useWindowDimensions();

  return {
    width,
    isMobile: width <= MOBILE_BREAKPOINT,
  };
}
