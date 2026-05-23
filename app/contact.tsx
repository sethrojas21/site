import CircleIconButton from "@/components/contact/CircleIconButton";
import { GITHUB_LINK, LINKEDIN_LINK } from "@/config/config";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { openInNewTab } from "@/utils/linking";
import { openURL } from "expo-linking";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useResponsive } from "@/theme/responsive";

export default function Contact() {
  const { isMobile } = useResponsive();
  const iconSize = isMobile ? contactIconSizeMobile : contactIconSize;

  return (
    <View style={[globalStyles.sectionContainer, styles.container]}>
      <View style={[
        globalStyles.pageContent,
        styles.content,
        isMobile && styles.contentMobile,
      ]}>
        <Image
          source={require("../assets/images/contactPhoto.jpeg")}
          style={[
            styles.image,
            isMobile && styles.imageMobile,
          ]}
          cachePolicy="memory-disk"
          contentFit="cover"
        />


        <View style={[
          styles.row,
          isMobile && styles.rowMobile,
        ]}>
            <CircleIconButton
                icon={{ pack: "ion", name: "logo-github", color: "#6F42C1", size: iconSize }}
                accessibilityLabel="Open GitHub"
                style={[
                  styles.iconBtn,
                  isMobile && styles.iconBtnMobile,
                  styles.githubBtn,
                ]}
                onPress={() => openInNewTab(GITHUB_LINK)}
            />
            <CircleIconButton
                icon={{ pack: "ion", name: "logo-linkedin", color: "#0A66C2", size: iconSize }}
                accessibilityLabel="Open LinkedIn"
                style={[
                  styles.iconBtn,
                  isMobile && styles.iconBtnMobile,
                  styles.linkedinBtn,
                ]}
                onPress={() => openInNewTab(LINKEDIN_LINK)}
            />
            <CircleIconButton
                icon={{ pack: "ion", name: "mail-outline", color: "#EA4335", size: iconSize }}
                accessibilityLabel="Send Email"
                style={[
                  styles.iconBtn,
                  isMobile && styles.iconBtnMobile,
                  styles.emailBtn,
                ]}
                onPress={() => openURL("mailto:skrojas@arizona.edu")}
            />
            <CircleIconButton
                icon={{ pack: "ion", name: "document-outline", color: "grey", size: iconSize }}
                accessibilityLabel="Download Resume"
                onPress={() => openInNewTab("/resume/swe_resume.pdf")}
                style={[
                  styles.iconBtn,
                  isMobile && styles.iconBtnMobile,
                  styles.resumeBtn,
                ]}
            />
        </View>
      </View>
    </View>
  )
}

const pageSize = 350;
const contactIconSize = 32;
const contactIconSizeMobile = 28;
const imageMult = 4;
const styles = StyleSheet.create({
  container: {
    gap: 40
  },
  content: {
    alignItems: "center",
    gap: 40,
  },
  contentMobile: {
    gap: 28,
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
  imageMobile: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },
  iconBtn: {
    width: pageSize / imageMult,
    height: pageSize / imageMult
  },
  iconBtnMobile: {
    width: 64,
    height: 64,
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
  rowMobile: {
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 14,
  },
})
