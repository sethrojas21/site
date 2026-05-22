import ExperienceCard from "@/components/experience/ExperienceCard";
import { FONT_FAMILY, FONT_SIZE } from "@/theme/font";
import { globalStyles } from "@/theme/styles";
import { Text, View } from "react-native";

export default function Experience() {
  return (
    <View style={globalStyles.sectionContainer}>

      <Text style={{fontFamily: FONT_FAMILY.bold, fontSize: FONT_SIZE.xl}}>
        Experience
      </Text>

      <View style={{paddingTop: 20}}>
        <ExperienceCard 
          position={"Software Development Intern"} 
          company={"IBM Storage"} 
          startDate={2026} 
          endDate={null} 
          summary={"Built an agentic AI infrastructure key-value inference cache flow and presented to IBM Fellows and Senior VPs"} 
          skills={[""]}
        />
      </View>

    </View>
  )
}