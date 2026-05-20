import { Slot } from "expo-router";
import Sidebar from "@/components/sidebar/Sidebar";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Sidebar />
      </View>

      <View style={styles.rightColumn}>
        <Slot />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: 70,
    gap : 20,
  },
  leftColumn: {
    padding: 10,
    paddingLeft: 5, 
  },
  rightColumn: {
    flex: 1,
    padding: 10
  },
});
