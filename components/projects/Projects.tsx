import { projects } from "@/data/projects";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import ProjectCard from "./projectCard";

const CARD_MIN_WIDTH = 280;
const CARD_GAP = 16;

export default function Projects() {
  const { width } = useWindowDimensions();

  const numColumns = Math.floor(
    width / (CARD_MIN_WIDTH + CARD_GAP)
  ) || 1;

  const columns = Math.min(numColumns, 3);

  return (
    <View>
      <FlatList
      data={projects}
      key={columns} // 🔑 IMPORTANT — forces re-render when columns change
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? { gap: CARD_GAP, justifyContent: 'center' } : undefined}
      contentContainerStyle={{ gap: CARD_GAP, padding: 16 }}
      renderItem={({ item }) => (
        <ProjectCard project={item} />
      )}
      />
    </View>
  )
}