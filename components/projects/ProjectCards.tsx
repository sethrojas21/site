import { GITHUB_LINK } from "@/config/config";
import { Skill } from "@/data/experience";
import { colors } from "@/theme/color";
import { openInNewTab } from "@/utils/linking";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import TechCard, { techCardBackground } from "./TechCard";
import AppText from "../AppText";
import { globalStyles } from "@/theme/styles";
import SkillCard from "../experience/SkillCard";

export type Project = {
  num: number;
  name: string;
  description: string;
  skills: Skill[];
  githubLink?: string;
  projLink?: string;
};

export default function ProjectCard({ 
    num, name, description, skills, githubLink, projLink
}: Project) {

  const displayNumber = String(num).padStart(2, "0");
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <AppText style={styles.displayNumText}>
        {displayNumber}
      </AppText>

      <View style={{flexDirection:'column'}}>
        
        <View style={globalStyles.rowContainer}>
          <AppText>
            {name}
          </AppText>

          <View style={{flexDirection:'row', justifyContent:'flex-start', gap: 5}}>
            <AppText>
              GitHub
            </AppText>

            <AppText>
              Detail
            </AppText>
          </View>
        </View>

        <AppText>
          {description}
        </AppText>

        <View style={globalStyles.skillsRow}>
            {skills.map((skill) => (
              <SkillCard
                key={skill}
                skill={skill}
              />
            ))}

        </View>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  displayNumText: {
    paddingRight: 5
  },
  titleText: {
    
  }
});
