import CircleIconButton from "@/components/contact/CircleIconButton";
import { GITHUB_LINK, LINKEDIN_LINK } from "@/config/config";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { openInNewTab } from "@/utils/linking";
import { openURL } from "expo-linking";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Contact() {
  return (
    <View style={[globalStyles.sectionContainer, styles.container]}>
      <Image
        source={require("../assets/images/contactPhoto.jpeg")}
        style={styles.image}
      />


      <View style={styles.row}>
          <CircleIconButton
              icon={{ pack: "ion", name: "logo-github", color: "#6F42C1", size: contactIconSize }}
              accessibilityLabel="Open GitHub"
              style={[styles.iconBtn, styles.githubBtn]}
              onPress={() => openInNewTab(GITHUB_LINK)}
          />
          <CircleIconButton
              icon={{ pack: "ion", name: "logo-linkedin", color: "#0A66C2", size: contactIconSize }}
              accessibilityLabel="Open LinkedIn"
              style={[styles.iconBtn, styles.linkedinBtn]}
              onPress={() => openInNewTab(LINKEDIN_LINK)}
          />
          <CircleIconButton
              icon={{ pack: "ion", name: "mail-outline", color: "#EA4335", size: contactIconSize }}
              accessibilityLabel="Send Email"
              style={[styles.iconBtn, styles.emailBtn]}
              onPress={() => openURL("mailto:skrojas@arizona.edu")}
          />
          <CircleIconButton
              icon={{ pack: "ion", name: "document-outline", color: "grey", size: contactIconSize }}
              accessibilityLabel="Download Resume"
              onPress={() => openInNewTab("/resume/swe_resume.pdf")}
              style={[styles.iconBtn, styles.resumeBtn]}
          />
      </View>

    </View>
  )
}

const pageSize = 350;
const contactIconSize = 32;
const imageMult = 4;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 40
  },
  
  titleText: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE.xxl
  },
  image: {
    width: pageSize,
    height: pageSize,
    borderRadius: (pageSize) / 2, // Half of 150 to make it perfectly round
    borderWidth: 2,   // Optional: add a border
    borderColor: '#fff',
  },
  iconBtn: {
    width: pageSize / imageMult,
    height: pageSize / imageMult
  },
  githubBtn: {
    borderColor: "#E9E2FF",
    backgroundColor: "#F3F0FF",
  },
  linkedinBtn: {
      borderColor: "#D6EAFB",
      backgroundColor: "#E6F2FB",
  },
  emailBtn: {
      borderColor: "#FFE6E4",
      backgroundColor: "#FFF1F0",
  },
  resumeBtn: {
    borderColor: "#E9E2FF",
    backgroundColor: "#F3F0FF",
  },
  row: {
      flexDirection: "row",
      gap: pageSize / (imageMult * 4),
  },
})
