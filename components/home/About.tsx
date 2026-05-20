import { ABOUT_INTRO } from "@/content/about";
import { FONT_SIZE } from "@/theme/font";
import { ScrollView } from "@nandorojo/anchor";
import { View, Image, StyleSheet, Text } from "react-native";
import { InlineAccentLink } from "../AccentLink";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/config/config";

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.hstack}>
          <Image
            source={require("../../assets/images/newHeadshot.jpeg")}
            style={styles.image}
          />

          <Text style={styles.blurb}>{ABOUT_INTRO}</Text>
        </View>

        <Text style={styles.blurb}>
          You can reach me on <InlineAccentLink text="LinkedIn" href={LINKEDIN_LINK} />, <InlineAccentLink text="GitHub" href={GITHUB_LINK} />, 
          and <InlineAccentLink text="Email" href={EMAIL_LINK} />
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 250,
    borderRadius: 10,
  },
  hstack: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
  },
  blurb: {
    fontSize: FONT_SIZE.md,
    lineHeight: 24,
    fontFamily: "Inter_400Regular"
  },
});
