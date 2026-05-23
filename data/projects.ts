import { Project } from "@/components/projects/ProjectCards";
import { Skill } from "@/data/experience";

export const projects: Project[] = [
    {
        name: "Roster IQ",
        description: "College Basketball analytics dashboard with two novel scouting metrics",
        skills: [Skill.Python, Skill.R, Skill.SQL, Skill.MachineLearning, Skill.React, Skill.Expo],
        githubLink: "https://github.com/sethrojas21/Roster-IQ",
    },
    {
        name: "Flow Kode",
        description: "CalHacks 2025 project developing an IDE-integrated agentic project manager on 3-person team",
        skills: [Skill.Python, Skill.MachineLearning, Skill.TeamCollaboration],
        githubLink: "https://github.com/flow-kode",
    },
    {
        name: "CFB Expected Points Added Model",
        description: "Multinomial logistic regression model estimating the expected points of a college football play",
        skills: [Skill.MachineLearning, Skill.R, Skill.Python],
        githubLink: "https://github.com/sethrojas21/nflEPAModel",
    },
    {
        name: "Snap Stats",
        description: "Basketball statistics mobile app to swiftly keep track of in-game stats",
        skills: [Skill.Swift, Skill.SwiftData],
        githubLink: "https://github.com/sethrojas21/SnapStats",
    },
    {
        name: "85' North",
        description: "Mobile application to view and preorder buffet items at dorm dining hall",
        skills: [Skill.Swift, Skill.SwiftData],
        githubLink: "https://github.com/sethrojas21/85North",
    },
]
