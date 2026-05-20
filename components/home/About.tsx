import { ABOUT_INTRO } from "@/content/about";
import { FONT_SIZE } from "@/theme/font";
import { ScrollView } from "@nandorojo/anchor";
import { View, Image, StyleSheet, Text } from "react-native";

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
          You can reach me GitHub, LinkedIn, Email
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
    height: 200,
    borderRadius: 10,
  },
  hstack: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 20,
  },
  blurb: {
    fontSize: FONT_SIZE.md,
    fontFamily: "Inter_400Regular"
  },
});
