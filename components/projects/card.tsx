import { colors } from "@/theme/color";
import { Project } from "@/types/project";
import { View, StyleSheet, Text } from "react-native";

type Props = {
    project: Project
    width: number
    height: number
}

export default function ProjectCard({ 
    project,
    width = 400, 
    height = 200,
}: Props) {
    return (
        <View style={[styles.container, { width, height }]}>
            <Text>{project.name}</Text>
            <Text>{project.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // You can add other static styles here if needed
        borderWidth: 1,
        borderColor: colors.border
    }
});
