import { FULL_NAME } from "@/config/config"
import { StyleSheet, Text, View } from "react-native"
import { FONT_SIZE } from "@/theme/font"
import SidebarLink from "./SidebarLink"
import { SIDEBAR_LINKS } from "@/data/sidebar"
import { usePathname } from "expo-router"

export default function Sidebar() {
  const pathname = usePathname();

  return (
  <View style={styles.container}>
    <Text style={styles.nameHeader}>{FULL_NAME}</Text>

    <View style={styles.linksContainer}>
      {SIDEBAR_LINKS.map((sidebarLink) => (
          <SidebarLink 
            key={sidebarLink.label}
            label={sidebarLink.label}
            href={sidebarLink.href}
            isActive={pathname === sidebarLink.href}
          />
      ))}
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
  },
  linksContainer: {
    marginTop: 10,
    gap: 10
  }
})
