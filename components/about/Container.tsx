import { ScrollView, StyleSheet, Text, View } from "react-native";
import Sidebar from "../sidebar/Sidebar";
import About from "./About";

export default function Container() {
  return (
    <View style={styles.container}>

      <View style={styles.leftColumn}>
        <Sidebar></Sidebar>
      </View>

      <View style={styles.rightColumn}>
        <ScrollView>
          <About></About>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: 70,
    justifyContent: "center",
    gap : 20,
  },
  leftColumn: {
    borderWidth: 1,
    padding: 10,
    paddingLeft: 5, 
    borderColor: "black"
  },
  rightColumn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 10
  },
});
