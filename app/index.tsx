// app/index.tsx
import { ScrollView, Target } from "@nandorojo/anchor";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Landing from "@/components/landing/landing";
import Projects from "@/components/projects/Projects";

export default function Index() {
  const [height, setHeight] = useState(() => {
    const h = Dimensions.get("window").height;
    return typeof h === "number" && h > 0 ? h : 800;
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = ({ window }: { window: { height: number } }) => setHeight(window.height);
    const sub = Dimensions.addEventListener?.("change", handler);
    return () => {
      if (sub?.remove) sub.remove();
    };
  }, []);

  return (
    <View style={styles.page}>

      <ScrollView key={mounted ? "mounted" : "boot"} contentContainerStyle={styles.container}>
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
            <View style={styles.sectionBody}>
              <About />
            </View>
          </View>
        </Target>

        <Target name="projects">
          <View style={[styles.section, { minHeight: height }]}>
            <Text style={styles.sectionTitle}>Projects</Text>
            <Projects />
          </View>
        </Target>

        <Target name="experience">
          <View style={[styles.section, { minHeight: height }]}>
            <Text style={styles.sectionTitle}>Experience</Text>
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
    width: "100%",
    alignItems: "center",
  },

  sectionBody: {
    flex: 1,                 // take remaining section height
    width: "100%",
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
  },

  sectionTitle: {
    color: "black",
    fontSize: 48,
    fontWeight: "600",
  },
});