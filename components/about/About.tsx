import { ABOUT_INTRO } from "@/content/about";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { InlineAccentLink } from "../AccentLink";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/config/config";
import { globalStyles } from "@/theme/styles";
import { useResponsive } from "@/theme/responsive";

export default function About() {
  const { width, isMobile } = useResponsive();
  const imageWidth = isMobile
    ? Math.max(110, Math.min(150, width * 0.33))
    : 200;
  const imageHeight = imageWidth * 1.25;

  return (
    <View style={globalStyles.sectionContainer}>
      <View style={globalStyles.pageContent}>
        <View style={[
          styles.hstack,
          isMobile && styles.hstackMobile,
        ]}>
          <Image
            source={require("../../assets/images/newHeadshot.jpeg")}
            style={[
              styles.image,
              {
                width: imageWidth,
                height: imageHeight,
              },
            ]}
            cachePolicy="memory-disk"
            contentFit="cover"
          />

          <Text style={[
            styles.blurb,
            styles.introBlurb,
            isMobile && styles.introBlurbMobile,
          ]}>{ABOUT_INTRO}</Text>
        </View>

        <View style={styles.spacingContainer}>
          <Text style={styles.aboutHeader}>
            Contact
          </Text>

          <Text style={styles.blurb}>
            You can reach me on <InlineAccentLink text="LinkedIn" href={LINKEDIN_LINK} />, <InlineAccentLink text="GitHub" href={GITHUB_LINK} />, 
            and <InlineAccentLink text="Email" href={EMAIL_LINK} />.
          </Text>
        </View>
        <View style={styles.spacingContainer}>
          <Text style={styles.aboutHeader}>
            Fun
          </Text>

          <Text style={styles.blurb}>
            In my free time I enjoy playing and watching basketball, cooking, listening to music, 
            and cheering on my Arizona Wildcats.
          </Text>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
  hstack: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
  },
  hstackMobile: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  aboutHeader: {
    fontFamily: FONT_FAMILY.bold, 
    fontSize: FONT_SIZE.xl
  },
  spacingContainer: {
    paddingTop: 20
  },
  blurb: {
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
    flexShrink: 1,
    maxWidth: "100%",
    textAlign: "left",
  },
  introBlurb: {
    flex: 1,
  },
  introBlurbMobile: {
    flex: 1,
    width: "auto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginVertical: 8,
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
});
