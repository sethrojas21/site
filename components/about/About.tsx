import { ABOUT_INTRO, FREE_TIME } from "@/content/about";
import { colors } from "@/theme/color";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CircularHeadshot from "./headshot";

export default function About() {
    const { width } = useWindowDimensions();
    const isWideScreen = width >= 1100;
    const splitIndex = Math.ceil(FREE_TIME.length / 2);
    const freeTimeColumns = [FREE_TIME.slice(0, splitIndex), FREE_TIME.slice(splitIndex)];

    return (
        <View style={styles.hstack}>
            <View>
                <CircularHeadshot 
                    imagePath={require("../../assets/images/headshot.jpeg")} 
                    size={350}
                />
            </View>

            <View style={[styles.hstackSpacing, styles.textColumn]}>

                <Text style={styles.descriptionText}>
                    {ABOUT_INTRO}
                </Text>

                <Text style={styles.freeTimeHeaderText}>In my free time, I enjoy:</Text>

                <View style={[styles.listContainer, isWideScreen && styles.listContainerWide]}>
                    {freeTimeColumns.map((columnItems, columnIndex) => (
                        <View
                            key={`column-${columnIndex}`}
                            style={[styles.listColumn, isWideScreen && styles.listColumnWide]}
                        >
                            {columnItems.map((item) => (
                                <View key={item} style={styles.listRow}>
                                    <Text style={styles.bullet}>•</Text>
                                    <Text style={styles.listText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

const textSize = 20;

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
        fontSize: 20,
        color: colors.text.primary,
        flexShrink: 1
    },
    freeTimeHeaderText: {
        fontSize: 26,
        fontWeight: '600',
        color: colors.text.primary,
        marginTop: 20,
        marginBottom: 10,
    },
    listContainer: {
        gap: 8,
    },
    listContainerWide: {
        flexDirection: 'row',
        gap: 24,
    },
    listColumn: {
        gap: 8,
    },
    listColumnWide: {
        flex: 1,
    },
    listRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bullet: {
        fontSize: textSize - 5,
        lineHeight: 30,
        color: colors.text.primary,
        marginRight: 10,
    },
    listText: {
        flex: 1,
        fontSize: textSize,
        lineHeight: 30,
        color: colors.text.primary,
    },
});