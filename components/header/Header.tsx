// components/header/Header.tsx
import { colors } from "@/theme/color";
import { ScrollTo } from "@nandorojo/anchor";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const links = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Experience", target: "experience" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.name}>Seth Rojas</Text>

        <View style={styles.nav}>
          {links.map((link) => (
            <ScrollTo key={link.target} target={link.target}>
              <Text style={styles.link}>{link.label}</Text>
            </ScrollTo>
          ))}
        </View>

        <ScrollTo target="projects">
          <View style={styles.cta}>
            <Text style={styles.ctaText}>See Work</Text>
          </View>
        </ScrollTo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 20,
    width: "100%",
    alignItems: "center",
    zIndex: 100,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "65%",
    maxWidth: 1200,
    paddingHorizontal: 28,
    paddingVertical: 14,

    backgroundColor: "#0B0B0B",
    opacity: 0.85,
    backdropFilter: "blur(10px)",
    borderRadius: 999,
  },

  name: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },

  nav: {
    flexDirection: "row",
    gap: 28,
  },

  link: {
    color: colors.brand.primary,
    fontSize: 15,
  },

  cta: {
    backgroundColor: colors.text.inverse,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },

  ctaText: {
    color: "#000",
    fontWeight: "600",
  },
});