import { Skill } from "@/data/experience";
import { colors } from "@/theme/color";
import { FONT_SIZE } from "@/theme/font";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import AppText from "../AppText";
import SkillCard from "./SkillCard";
import { globalStyles } from "@/theme/styles";
import DetailsToggle from "../DetailsToggle";
import AnimatedDetails from "../AnimatedDetails";

type ExpereinceCardProps = {
  position: string
  company: string
  dates: string
  summary: string
  details: string[]
  skills: Skill[]
};

export default function ExperienceCard(
  {position, company, dates, summary, details, skills} : ExpereinceCardProps
) {
  const [isExpanded, setIsExpanded] = useState(false);

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

        <View style={globalStyles.rowContainer}>
          <AppText style={styles.companyText}>
            {company}
          </AppText>

          <DetailsToggle
            isExpanded={isExpanded}
            onPress={() => setIsExpanded((current) => !current)}
            color={colors.brand.secondary}
          />
        </View>

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

      <AnimatedDetails isExpanded={isExpanded}>
        <View style={styles.detailsContainer}>
          {details.map((detail) => (
            <View key={detail} style={styles.detailRow}>
              <AppText style={styles.bulletText}>•</AppText>
              <AppText style={styles.detailText}>
                {detail}
              </AppText>
            </View>
          ))}
        </View>
      </AnimatedDetails>
    </View>
  )
}


export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    width: "100%",
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
    flex: 1,
    paddingRight: 12,
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
  },
  detailsContainer: {
    borderLeftWidth: 5,
    borderColor: colors.brand.primary,
    paddingTop: 5,
    paddingBottom: 8,
    gap: 4,
    paddingLeft: 10,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bulletText: {
    width: 16,
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
    color: colors.text.primary,
  },
  detailText: {
    flex: 1,
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
    color: colors.text.primary,
  }
})
