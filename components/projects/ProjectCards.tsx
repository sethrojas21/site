import { colors } from "@/theme/color";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import type { Project } from "@/types/project";
import { openInNewTab } from "@/utils/linking";
import { Pressable, StyleSheet, View } from "react-native";
import { useState } from "react";
import AppText from "../AppText";
import { globalStyles } from "@/theme/styles";
import SkillCard from "../experience/SkillCard";

type ProjectCardProps = Project & {
  num: number;
};

export default function ProjectCard({ 
    num, name, description, details, skills, githubLink, projLink
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayNumber = String(num).padStart(2, "0");
  return (
    <View style={styles.container}>
      <AppText style={styles.displayNumText}>
        {displayNumber} /
      </AppText>

      <View style={styles.content}>
        
        <View style={styles.headerRow}>
          <AppText style={styles.titleText}>
            {name}
          </AppText>

          <View style={styles.actionsRow}>
            {githubLink && (
              <Pressable
                onPress={() => openInNewTab(githubLink)}
                style={styles.actionButton}
              >
                <AppText style={styles.githubText}>
                  GitHub ↗
                </AppText>
              </Pressable>
            )}

            <Pressable
              onPress={() => setIsExpanded((current) => !current)}
              style={styles.actionButton}
            >
              <AppText style={styles.actionText}>
                {isExpanded ? "Hide ˄" : "Details ˅"}
              </AppText>
            </Pressable>
          </View>
        </View>

        <AppText style={styles.descriptionText}>
          {description}
        </AppText>

        <View style={globalStyles.skillsRow}>
            {skills.map((skill) => (
              <SkillCard
                key={skill}
                skill={skill}
              />
            ))}

        </View>

        {isExpanded && (
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
        )}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 20,
  },
  displayNumText: {
    width: 44,
    paddingTop: 2,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: "#8A8A8A",
  },
  content: {
    flex: 1,
  },
  titleText: {
    flex: 1,
    paddingRight: 12,
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_FAMILY.bold,
    color: colors.text.primary,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  actionsRow: {
    flexDirection: "row",
    flexShrink: 0,
    gap: 12,
  },
  actionButton: {
    flexShrink: 0,
    paddingTop: 3,
  },
  actionText: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: colors.brand.primary,
  },
  githubText: {
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.regular,
    color: colors.brand.secondary,
  },
  descriptionText: {
    paddingTop: 4,
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 24,
    color: colors.text.primary,
  },
  detailsContainer: {
    gap: 4,
    paddingTop: 12,
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
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 24,
    color: colors.text.primary,
  },
});
