import { FONT_SIZE } from "@/theme/font";
import { colors } from "@/theme/color";
import { openURL } from "expo-linking";
import { Href, Link } from "expo-router";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

type AccentLinkProps = {
  label: string;
  href: Href | string;
  external?: boolean;
  isActive?: boolean;
};

type InlineAccentLinkProps = {
  text: string;
  href: string;
};

function normalizeExternalHref(href: string) {
  if (/^[a-z][a-z\d+\-.]*:/i.test(href)) {
    return href;
  }

  return `https://${href}`;
}

export default function AccentLink({ label, href, external, isActive }: AccentLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <View style={styles.inner}>
      <Text style={[
        styles.text,
        isActive && styles.activeText,
        isHovered && styles.hoverText,
      ]}>
        {label}
      </Text>

      <View style={[styles.accentLine, isActive && styles.hiddenAccentLine]} />
    </View>
  ); 
  
  if (external) {
      return (
        <Pressable
          onPress={() => openURL(String(href))}
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          style={styles.pressable}
        >
          {content}
        </Pressable>
      );
    }

    return (
      <Link href={href as Href} asChild>
        <Pressable 
          onHoverIn={() => setIsHovered(true)}
          onHoverOut={() => setIsHovered(false)}
          style={styles.pressable}
        >
          {content}
        </Pressable>
      </Link>
    )
}

export function InlineAccentLink({ text, href }: InlineAccentLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const webHoverProps = Platform.OS === "web"
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      }
    : {};

  return (
    <Text
      onPress={() => openURL(normalizeExternalHref(href))}
      style={[styles.inlineText, isHovered && styles.hoverText]}
      {...webHoverProps}
    >
      {text}
    </Text>
  );
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
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
    color: colors.text.primary,
  },
  activeText: {
    fontFamily: "Inter_700Bold",
  },
  hoverText: {
    color: colors.brand.primary,
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
  inlineText: {
    fontSize: FONT_SIZE.md,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
    color: colors.text.primary,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.brand.primary,
  },
})
