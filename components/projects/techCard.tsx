import { colors } from "@/theme/color";
import { Tech } from "@/types/tech";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    tech: Tech
}

export default function TechCard({tech}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{String(tech)}</Text>
        </View>
    )
}

export const techCardBackground = {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.background.muted
};

const styles = StyleSheet.create({
    container: techCardBackground,
    text: {
        fontSize: 12,
        color: colors.brand.secondary
    }
})