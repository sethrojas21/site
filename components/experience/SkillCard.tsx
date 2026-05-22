import { colors } from "@/theme/color"
import { FONT_SIZE } from "@/theme/font"
import { globalStyles } from "@/theme/styles"
import { Text, StyleSheet, View } from "react-native"

type SkillCardProps = {
  skill: string
}

export default function SkillCard(
  {skill} : SkillCardProps
) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>
        {skill}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    padding: 1.5
  },
  text: {
    fontSize: FONT_SIZE.md,
    color: colors.brand.primary
  }
})