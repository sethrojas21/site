import { colors } from "@/theme/color";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { Pressable, StyleSheet, TextStyle } from "react-native";
import AppText from "./AppText";

type DetailsToggleProps = {
  isExpanded: boolean;
  onPress: () => void;
  color?: TextStyle["color"];
};

export default function DetailsToggle({ isExpanded, onPress, color = colors.brand.primary }: DetailsToggleProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <AppText style={[styles.text, { color }]}>
        {isExpanded ? "Hide ˄" : "Details ˅"}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexShrink: 0,
    paddingTop: 3,
  },
  text: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
  },
});
