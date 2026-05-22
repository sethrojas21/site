import { Slot } from "expo-router";
import Sidebar from "@/components/sidebar/Sidebar";
import { View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const maxPageWidth = 900;
const minGapWidth = 700;
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
      <ScrollView style={styles.scrollView}>

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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 5,
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
    paddingTop: 10,
    paddingLeft: 5, 
  },
  rightColumn: {
    alignSelf: "stretch",
    flex: 1,
    paddingTop: 10
  },
  scrollView: {
    flex: 1
  }
});
