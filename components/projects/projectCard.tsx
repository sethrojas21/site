import { GITHUB_LINK } from "@/config/config";
import { colors } from "@/theme/color";
import { Project } from "@/types/project";
import { openInNewTab } from "@/utils/linking";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TechCard, { techCardBackground } from "./techCard";

type Props = {
    project: Project
    width?: number
    height?: number
}

export default function ProjectCard({ 
    project,
    width = 275, 
    height = 225,
}: Props) {
    return (
        <View style={[styles.container, { width, height }]}>
            <View style={styles.content}>
                <Text style={[styles.text, styles.name]}>{project.name}</Text>
                <Text style={[styles.text, styles.description]}>{project.description}</Text>

                <View style={{ flexDirection: "row", gap: 8 }}>
                    {project.tech.map((item) => (
                        <TechCard key={item} tech={item} />
                    ))}
                </View>
                
                <View style={{ flex: 1 }} />
                
                <Pressable 
                    style={({ pressed }) => [
                        techCardBackground, 
                        styles.ghubCard,
                        pressed && styles.ghubCardPressed
                    ]}
                    onPress={() => openInNewTab(project.githubLink ?? GITHUB_LINK)}
                >
                    <Feather name="github" size={16} />
                    <Text style={{ paddingLeft: 8, fontSize: 14 }}>Code</Text>
                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: "#f5f6fa",
        // Glossy effect: subtle gradient and shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        borderRadius: 16,
        overflow: "hidden",
    },
    content: {
        padding: 16,
        flex: 1,
        justifyContent: 'space-between',
    },
    text: {
        textAlign: 'left',
    },
    name: {
        fontSize: 24,
        color: colors.brand.primary,
        fontWeight: "bold",
    },
    description: {
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 15,
        color: colors.text.primary
    },
    ghubCard: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    ghubCardPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.98 }],
    }
    
});
