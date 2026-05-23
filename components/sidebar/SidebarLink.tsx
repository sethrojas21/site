import { colors } from "@/theme/color";
import { FONT_SIZE } from "@/theme/font";
import { Href, Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export type SidebarLinkProps = {
  label: string;
  href: Href;
  isActive?: boolean;
};

export default function SidebarLink({ label, href, isActive }: SidebarLinkProps) {
  // TODO: make Link have a hover style
  return (
    <Link 
      href={href}
      style={[
        styles.both,
        isActive ? styles.active : styles.inactive
      ]}
      >
      {label}
    </Link>
  )
}

const styles = StyleSheet.create({
  both: {
    fontSize: FONT_SIZE.md
  },
  active: {
    fontWeight: 'bold'
  },
  inactive: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.brand.primary
    
  }
})