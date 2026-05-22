import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { Text, StyleSheet, View } from "react-native";
import AppText from "../AppText";
import { colors } from "@/theme/color";
import SkillCard from "./SkillCard";

type ExpereinceCardProps = {
  position: string
  company: string
  startDate: number
  endDate: number | null // if null then present
  summary: string
  skills: [string]
};

export default function ExperienceCard(
  {position, company, startDate, endDate, summary, skills} : ExpereinceCardProps
) {

  let endDateStr;
  if (endDate == null) {
    endDateStr = "Present"
  } else {
    endDateStr = endDate.toString();
  }
  return (
    <View style={styles.cardContainer}>

      <View style={styles.expHeadlineContainer}>

        <View style={styles.rowContainer}>

          <AppText style={styles.positionText}>
            {position}
          </AppText>

          <AppText style={styles.dateText}>
            {startDate}-{endDateStr}
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
          <SkillCard
            skill="Python"
          />
          <SkillCard
            skill="Agentic AI"
          />
          <SkillCard
            skill="PostgreSQL"
          />
          <SkillCard
            skill="Python"
          />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 450,
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
