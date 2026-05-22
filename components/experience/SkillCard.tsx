import { colors } from "@/theme/color"
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font"
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
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#F7B59D",
    backgroundColor: "#FFF3EF",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  text: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: colors.brand.primary,
    lineHeight: 18,
  }
})
