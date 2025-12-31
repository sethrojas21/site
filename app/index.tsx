// app/index.tsx
import { ScrollView, Target } from "@nandorojo/anchor";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

import Header from "@/components/header/Header";
import Landing from "@/components/landing/landing";

export default function Index() {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.page}>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ position: "sticky", top: 0, zIndex: 10, backgroundColor: "white" }}>
          <Header />
        </View>

        <Target name="landing">
          <View style={[styles.section, { minHeight: height }]}>
            <Landing />
          </View>
        </Target>

        <Target name="about">
          <View style={[styles.section, { minHeight: height }]}>
            <Text style={styles.sectionTitle}>About</Text>
          </View>
        </Target>

        <Target name="projects">
          <View style={[styles.section, { minHeight: height }]}>
            <Text style={styles.sectionTitle}>Projects</Text>
          </View>
        </Target>

        <Target name="contact">
          <View style={[styles.section, { minHeight: height }]}>
            <Text style={styles.sectionTitle}>Contact</Text>
          </View>
        </Target>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },

  container: {},

  section: {
    alignItems: "center",
  },

  sectionTitle: {
    color: "black",
    fontSize: 48,
    fontWeight: "600",
  },
});