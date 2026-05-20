import { FONT_SIZE } from "@/theme/font";
import { colors } from "@/theme/color";
import { openURL } from "expo-linking";
import { Href, Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AccentLinkProps = {
  label: string;
  href: Href | string;
  external?: boolean;
  isActive?: boolean;
};

export default function AccentLink({ label, href, external, isActive }: AccentLinkProps) {
  const content = (
    <View style={styles.inner}>
      <Text style={[styles.text, isActive && styles.activeText]}>
        {label}
      </Text>

      <View style={[styles.accentLine, isActive && styles.hiddenAccentLine]} />
    </View>
  );  
  
  if (external) {
      return (
        <Pressable
          onPress={() => openURL(String(href))}
          style={styles.pressable}
        >
          {content}
        </Pressable>
      );
    }

    return (
      <Link href={href as Href} asChild>
        <Pressable style={styles.pressable}>
          {content}
        </Pressable>
      </Link>
    )
}

const styles = StyleSheet.create({
  pressable: {
    alignSelf: "flex-start",
    paddingVertical: 2,
  },
  inner: {
    alignSelf: "flex-start",
    paddingBottom: 2,
  },
  text: {
    fontSize: FONT_SIZE.md,
    lineHeight: 22,
    color: colors.text.primary,
  },
  activeText: {
    fontWeight: "700",
  },
  accentLine: {
    height: 2,
    marginTop: -1,
    backgroundColor: colors.brand.primary,
    width: "100%",
  },
  hiddenAccentLine: {
    opacity: 0,
  },
})
