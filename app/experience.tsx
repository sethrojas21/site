import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { Text, View } from "react-native";

export default function Experience() {
  return (
    <View style={globalStyles.sectionContainer}>

      <Text style={globalStyles.sectionHeader}>
        Experience
      </Text>

      <View style={{paddingTop: 25, gap: 25}}>
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.position}`}
            position={experience.position}
            company={experience.company}
            dates={experience.dates}
            summary={experience.summary}
            skills={experience.skills}
          />
        ))}
      </View>

    </View>
  )
}
