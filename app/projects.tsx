import ProjectCard from "@/components/projects/ProjectCards";
import { projects } from "@/data/projects";
import { FlatList, useWindowDimensions, View } from "react-native";

const CARD_MIN_WIDTH = 280;
const CARD_GAP = 16;

export default function Projects() {
  const { width } = useWindowDimensions();

  const numColumns = Math.floor(
    width / (CARD_MIN_WIDTH + CARD_GAP)
  ) || 1;

  const columns = Math.min(numColumns, 2);

  return (
    <View>
      <View style={{paddingTop: 25, gap: 25}}>
        {projects.map((project, index) => (
          <ProjectCard 
            num={index + 1}
            key={project.name}
            name={project.name}
            description={project.description}
            skills={project.skills}
            githubLink={project.githubLink}
            projLink={project.projLink} 
                      />
        ))}
      </View>
    </View>
  )
}
