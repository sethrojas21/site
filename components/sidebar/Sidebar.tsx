import { FULL_NAME } from "@/config/config"
import { StyleSheet, Text, View } from "react-native"
import { FONT_SIZE } from "@/theme/font"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  return (
  <View style={styles.container}>
    <Text style={styles.nameHeader}>{FULL_NAME}</Text>

    <View>
      <SidebarLink label="About" href={"/about"} isActive={false}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nameHeader: {
    fontSize: FONT_SIZE.xl,
    color: "black"
  }
})