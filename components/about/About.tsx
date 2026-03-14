import { ABOUT_ME } from "@/content/about";
import { colors } from "@/theme/color";
import { StyleSheet, Text, View } from "react-native";
import CircularHeadshot from "./headshot";

export default function About() {
    return (
        <View style={styles.hstack}>
            <View>
                <CircularHeadshot 
                    imagePath={require("../../assets/images/headshot.jpeg")} 
                    size={350}
                />
            </View>

            <View style={[styles.hstackSpacing, styles.textColumn]}>
                <Text style={styles.introHeaderText}>
                    HI,
                </Text>

                <Text style={styles.descriptionText}>
                    {ABOUT_ME}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hstack: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    hstackSpacing: {
        marginHorizontal: 50
    },
    textColumn: {
        flex: 1,
        minWidth: 0,
    },
    descriptionText: {
        fontSize: 25,
        color: colors.text.primary,
        flexShrink: 1
    },
    introHeaderText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'teal'
    }
});