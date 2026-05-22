import { StyleSheet } from "react-native";
import { FONT_FAMILY, FONT_SIZE } from "./font";

export const globalStyles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  nameHeader: {
      fontSize: FONT_SIZE.xl,
      fontFamily: FONT_FAMILY.regular,
      color: "black",
    },
});