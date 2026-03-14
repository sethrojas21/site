import { ABOUT_INTRO, FREE_TIME } from "@/content/about";
import { colors } from "@/theme/color";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import CircularHeadshot from "./headshot";

export default function About() {
    const { width } = useWindowDimensions();
    const isWideScreen = width >= 1100;
    const isDesktop = width >= 900;
    const splitIndex = Math.ceil(FREE_TIME.length / 2);
    const freeTimeColumns = [FREE_TIME.slice(0, splitIndex), FREE_TIME.slice(splitIndex)];

    return (
        <View style={styles.sectionOuter}>
            <View style={[styles.contentWrap, isDesktop ? styles.contentWrapDesktop : styles.contentWrapMobile]}>
                <View style={[styles.photoWrap, isDesktop && styles.photoWrapDesktop]}>
                <CircularHeadshot 
                    imagePath={require("../../assets/images/headshot.jpeg")} 
                    size={isDesktop ? 320 : 250}
                />
                </View>

                <View style={[styles.textColumn, isDesktop && styles.textColumnDesktop]}>
                <Text style={styles.descriptionText}>
                    {ABOUT_INTRO}
                </Text>

                    <View style={styles.divider} />

                <Text style={styles.freeTimeHeaderText}>In my free time, I enjoy:</Text>

                <View style={[styles.listContainer, isWideScreen && styles.listContainerWide]}>
                    {freeTimeColumns.map((columnItems, columnIndex) => (
                        <View
                            key={`column-${columnIndex}`}
                            style={[styles.listColumn, isWideScreen && styles.listColumnWide]}
                        >
                            {columnItems.map((item) => (
                                <View key={item} style={styles.listRow}>
                                    <View style={styles.bulletDot} />
                                    <Text style={styles.listText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
                </View>
            </View>
        </View>
    )
}

const textSize = 20;

const styles = StyleSheet.create({
    sectionOuter: {
        width: '100%',
        maxWidth: 1180,
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    contentWrap: {
        width: '100%',
    },
    contentWrapDesktop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    contentWrapMobile: {
        gap: 18,
    },
    photoWrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoWrapDesktop: {
        marginTop: 8,
    },
    textColumn: {
        minWidth: 0,
    },
    textColumnDesktop: {
        flex: 1,
        marginLeft: 44,
    },
    descriptionText: {
        fontSize: 20,
        lineHeight: 31,
        color: colors.text.primary,
        flexShrink: 1,
    },
    divider: {
        width: 96,
        height: 4,
        borderRadius: 999,
        marginTop: 20,
        marginBottom: 16,
        backgroundColor: colors.brand.primary,
    },
    freeTimeHeaderText: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.text.primary,
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
    bulletDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: colors.brand.primary,
    },
    listText: {
        flex: 1,
        fontSize: textSize,
        lineHeight: 32,
        color: colors.text.primary,
    },
});