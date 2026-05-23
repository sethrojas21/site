import { StyleSheet } from "react-native";
import { FONT_FAMILY, FONT_SIZE } from "./font";

export const globalStyles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  pageContent: {
    width: "100%",
    maxWidth: 600,
  },
  sectionHeader: {
    fontFamily: FONT_FAMILY.bold, 
    fontSize: FONT_SIZE.xl
  },
  nameHeader: {
      fontSize: FONT_SIZE.xl,
      fontFamily: FONT_FAMILY.regular,
      color: "black",
    },
  rowContainer: {
    flexDirection: "row",
    paddingBottom: 2,
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingTop: 10,
  }
});
