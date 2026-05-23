import ProjectCard from "@/components/projects/ProjectCards";
import { projects } from "@/data/projects";
import { FONT_FAMILY } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { Text, View } from "react-native";

export default function Projects() {
  return (
    <View>

      <Text style={globalStyles.sectionHeader}>
        Projects
      </Text>
      <View style={{ paddingTop: 25, gap: 20 }}>
        {projects.map((project, index) => (
          <ProjectCard 
            num={index + 1}
            key={project.name}
            name={project.name}
            description={project.description}
            details={project.details}
            skills={project.skills}
            githubLink={project.githubLink}
            projLink={project.projLink} 
                      />
        ))}
      </View>
    </View>
  )
}
