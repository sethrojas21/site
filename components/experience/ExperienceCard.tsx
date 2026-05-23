import { Skill } from "@/data/experience";
import { colors } from "@/theme/color";
import { FONT_SIZE } from "@/theme/font";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";
import SkillCard from "./SkillCard";
import { globalStyles } from "@/theme/styles";

type ExpereinceCardProps = {
  position: string
  company: string
  dates: string
  summary: string
  skills: Skill[]
};

export default function ExperienceCard(
  {position, company, dates, summary, skills} : ExpereinceCardProps
) {
  return (
    <View style={styles.cardContainer}>

      <View style={styles.expHeadlineContainer}>

        <View style={globalStyles.rowContainer}>

          <AppText style={styles.positionText}>
            {position}
          </AppText>

          <AppText style={styles.dateText}>
            {dates}
          </AppText>
        </View>

        <AppText style={styles.companyText}>
          {company}
        </AppText>

      </View>

      <View style={styles.expInfoContainer}>

        <AppText style={styles.summaryText}>
          {summary}
        </AppText>

        <View style={globalStyles.skillsRow}>
          {skills.map((skill) => (
            <SkillCard
              key={skill}
              skill={skill}
            />
          ))}
        </View>
      </View>
    </View>
  )
}


export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 600,
  },
  expHeadlineContainer: {
    borderLeftWidth: 5,
    borderColor: colors.brand.primary,
    paddingLeft: 10,
  },
  expInfoContainer: {
    borderLeftWidth: 5,
    paddingTop: 5,
    borderColor: colors.brand.secondary,
    paddingLeft: 10,
  },
  companyText: {
    fontSize: FONT_SIZE.md,
    fontStyle: 'italic'
  },
  positionText: {
    flex: 1,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    paddingRight: 12,
  },
  dateText: {
    flexShrink: 0,
    fontSize: FONT_SIZE.sm,
    textAlign: "right",
  },
  summaryText: {
    fontSize: FONT_SIZE.md
  }
})
