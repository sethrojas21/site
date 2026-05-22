import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { Text, StyleSheet, View } from "react-native";
import AppText from "../AppText";
import { colors } from "@/theme/color";
import SkillCard from "./SkillCard";
import { ExperienceSkill } from "@/data/experience";

type ExpereinceCardProps = {
  position: string
  company: string
  dates: string
  summary: string
  skills: ExperienceSkill[]
};

export default function ExperienceCard(
  {position, company, dates, summary, skills} : ExpereinceCardProps
) {
  return (
    <View style={styles.cardContainer}>

      <View style={styles.expHeadlineContainer}>

        <View style={styles.rowContainer}>

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

        <View style={styles.skillsRow}>
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


const styles = StyleSheet.create({
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
  rowContainer: {
    flexDirection: "row",
    paddingBottom: 2,
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
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
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingTop: 10,
  }
})
