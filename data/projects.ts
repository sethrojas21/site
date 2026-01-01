import { Project } from "@/types/project";
import { Tech } from "../types/tech";

export const projects: Project[] = [
    {
        name: "Roster IQ",
        description: "College Basketball analytics dashboard with two novel scouting metrics",
        tech: [Tech.Python, Tech.R, Tech.SQL, Tech.ML, Tech.React, Tech.Expo],
        githubLink: "https://github.com/sethrojas21/Roster-IQ",
    },
    {
        name: "Flow Kode",
        description: "CalHacks 2025 project developing an IDE-integrated agentic project manager on 3-person team",
        tech: [Tech.Python, Tech.ML, Tech.Collaboration],
        githubLink: "https://github.com/flow-kode",
    },
    {
        name: "CFB Expected Points Added Model",
        description: "Multinomial logistic regression model estimating the expected points of a college football play",
        tech: [Tech.ML, Tech.R, Tech.Python],
        githubLink: "https://github.com/sethrojas21/nflEPAModel",
    },
    {
        name: "Snap Stats",
        description: "Basketball statistics mobile app to swiftly keep track of in-game stats",
        tech: [Tech.Swift, Tech.SwiftData],
        githubLink: "https://github.com/sethrojas21/SnapStats",
    },
    {
        name: "85' North",
        description: "Mobile application to view and preorder buffet items at dorm dining hall",
        tech: [Tech.Swift, Tech.SwiftData],
        githubLink: "https://github.com/sethrojas21/85North",
    },
]
