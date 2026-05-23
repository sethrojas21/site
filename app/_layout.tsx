import { Slot } from "expo-router";
import { Text } from "react-native";
import Sidebar from "@/components/sidebar/Sidebar";
import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { colors } from "@/theme/color";

const maxPageWidth = 900;
const minGapWidth = 600;
const maxColumnGap = 50;
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  
  const { width } = useWindowDimensions();
 function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
  }

  const progress = clamp((width - minGapWidth) / (maxPageWidth - minGapWidth), 0, 1);
  const columnGap = progress * maxColumnGap;
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.page}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[
          styles.container,
          {gap: columnGap}
          ]}>
          <View style={styles.leftColumn}>
            <Sidebar />
          </View>

          <View style={styles.rightColumn}>
            <Slot />
          </View>
        </View>

        <Text style={styles.copyrightText}>
          Copyright © 2026 Seth Rojas. All rights reserved.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    borderWidth: 1
  },
  container: {
    flexDirection: "row",
    alignItems: 'flex-start',
    width: "100%",
    maxWidth: maxPageWidth,
    flex: 1,
  },
  leftColumn: {
    maxWidth: 200,
    paddingLeft: 5, 
  },
  rightColumn: {
    alignSelf: "stretch",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  copyrightText: {
    marginTop: "auto",
    paddingVertical: 40,
    fontFamily: FONT_FAMILY.regular,
    fontSize: FONT_SIZE.md,
    color: 'grey',
  }
});
