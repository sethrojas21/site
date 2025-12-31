import { colors } from "@/theme/color";
import { StyleSheet, Text, View } from "react-native";
import { FontSize } from "@/theme/font";
import CircleIconButton from "./social_icon";
import * as Linking from "expo-linking";

const openInNewTab = (url: string) => {
  if (typeof window !== 'undefined' && window.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    Linking.openURL(url);
  }
};

type Props = { name?: string; subtitle?: string };

export default function Landing ({
    name = "Seth Rojas",
    subtitle = "Software Developer & Data Scientist"
}: Props) {

    return (
        <View style={styles.container}>

            <Text style={styles.preIntro}>HI, I'M</Text>

            <Text style={styles.fullName}>{name}</Text>

            <Text style={styles.devName}>{subtitle}</Text>

            <View style={styles.row}>
                <CircleIconButton
                    icon={{ pack: "ion", name: "logo-github", color: "#6F42C1" }}
                    accessibilityLabel="Open GitHub"
                    style={styles.githubBtn}
                    onPress={() => openInNewTab("https://github.com/sethrojas21")}
                />
                <CircleIconButton
                    icon={{ pack: "ion", name: "logo-linkedin", color: "#0A66C2" }}
                    accessibilityLabel="Open LinkedIn"
                    style={styles.linkedinBtn}
                    onPress={() => openInNewTab("https://www.linkedin.com/in/skrojas")}
                />
                <CircleIconButton
                    icon={{ pack: "ion", name: "mail-outline", color: "#EA4335" }}
                    accessibilityLabel="Send Email"
                    style={styles.emailBtn}
                    onPress={() => Linking.openURL("mailto:skrojas@arizona.edu")}
                />
                <CircleIconButton
                    icon={{ pack: "ion", name: "document-outline", color: "grey" }}
                    accessibilityLabel="Download Resume"
                    onPress={() => openInNewTab("/resume/swe_resume.pdf")}
                    style={{
                        borderColor: "#E9E2FF",
                        backgroundColor: "#F3F0FF",
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        gap: 10
    },
    preIntro: {
        color: colors.text.secondary,
        fontSize: FontSize.xxs
    },
    fullName: {
        color: colors.brand.primary,
        fontSize: FontSize.xxl,
        fontWeight: 'bold'
    },
    devName: {
        color: colors.text.primary,
        fontSize: FontSize.xxs,
        textDecorationLine: 'underline'
    },
      row: {
        flexDirection: "row",
        gap: 16,
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
    
})

  // Type declaration for window.open (for TypeScript)
declare global {
interface Window {
    open(url?: string, target?: string, features?: string): Window | null;
}
}