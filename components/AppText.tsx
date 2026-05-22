// components/AppText.tsx
import { Text, TextProps, StyleSheet } from "react-native";

export default function AppText({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[styles.text, style]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter_400Regular",
  },
});