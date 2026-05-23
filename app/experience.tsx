import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { Text, View, StyleSheet} from "react-native";

export default function Experience() {
  return (
    <View style={globalStyles.sectionContainer}>
      <View style={globalStyles.pageContent}>

        <Text style={globalStyles.sectionHeader}>
          Experience
        </Text>

        <View style={styles.myView}>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.position}`}
              position={experience.position}
              company={experience.company}
              dates={experience.dates}
              summary={experience.summary}
              details={experience.details}
              skills={experience.skills}
            />
          ))}
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
  },
  myView: {
    paddingTop: 25, 
    gap: 25
  }
})
