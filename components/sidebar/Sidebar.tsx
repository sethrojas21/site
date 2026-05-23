import { FULL_NAME } from "@/config/config"
import { StyleSheet, Text, View } from "react-native"
import { FONT_SIZE } from "@/theme/font"
import { SIDEBAR_LINKS } from "@/data/sidebar"
import { usePathname } from "expo-router"
import AccentLink from "../AccentLink"
import { globalStyles } from "@/theme/styles"
import { useResponsive } from "@/theme/responsive";

export default function Sidebar() {
  const pathname = usePathname();
  const { isMobile } = useResponsive();

  return (
  <View style={[
    styles.container,
    isMobile && styles.containerMobile,
  ]}>
    <Text style={globalStyles.nameHeader}>{FULL_NAME}</Text>

    <View style={[
      styles.linksContainer,
      isMobile && styles.linksContainerMobile,
    ]}>
      {SIDEBAR_LINKS.map((sidebarLink) => (
          <AccentLink 
            key={sidebarLink.label}
            label={sidebarLink.label}
            href={sidebarLink.href}
            external={false}
            isActive={pathname === sidebarLink.href}
          />
      ))}

      <AccentLink 
        label="Resume"
        href={"/resume/swe_resume.pdf"}
        external={true}
        isActive={false}
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMobile: {
    width: "100%",
  },
  nameHeader: {
    fontSize: FONT_SIZE.xl,
    fontFamily: "Inter_400Regular",
    color: "black"
  },
  linksContainer: {
    marginTop: 10,
    gap: 5
  },
  linksContainerMobile: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  }
})
