import type { Project } from "@/types/project";
import { Skill } from "@/data/experience";

export const projects: Project[] = [
    {
        name: "Roster IQ",
        description: "College Basketball analytics dashboard with two novel scouting metrics",
        details: [
            "Built custom recruiting metrics for evaluating player fit and value.",
            "Designed dashboard views for comparing players, teams, and model outputs.",
            "Used data pipelines and machine learning workflows to support basketball analytics.",
        ],
        skills: [Skill.Python, Skill.R, Skill.SQL, Skill.MachineLearning, Skill.React, Skill.Expo],
        githubLink: "https://github.com/sethrojas21/Roster-IQ",
    },
    {
        name: "Flow Kode",
        description: "CalHacks 2025 project developing an IDE-integrated agentic project manager on 3-person team",
        details: [
            "Built an agentic project manager to help developers organize work from inside an IDE.",
            "Collaborated on a 3-person hackathon team to ship a working prototype quickly.",
            "Connected AI workflow logic with developer-facing project planning features.",
        ],
        skills: [Skill.Python, Skill.MachineLearning, Skill.TeamCollaboration],
        githubLink: "https://github.com/flow-kode",
    },
    {
        name: "CFB Expected Points Added Model",
        description: "Multinomial logistic regression model estimating the expected points of a college football play",
        details: [
            "Modeled college football play outcomes using multinomial logistic regression.",
            "Estimated expected points to evaluate game state and play-level value.",
            "Explored football analytics methods through statistical modeling in R and Python.",
        ],
        skills: [Skill.MachineLearning, Skill.R, Skill.Python],
        githubLink: "https://github.com/sethrojas21/nflEPAModel",
    },
    {
        name: "Snap Stats",
        description: "Basketball statistics mobile app to swiftly keep track of in-game stats",
        details: [
            "Built a native iOS app for tracking basketball stats during live games.",
            "Designed data flows for recording and reviewing player and team statistics.",
            "Focused on faster in-game stat entry compared with manual tracking.",
        ],
        skills: [Skill.Swift, Skill.SwiftData],
        githubLink: "https://github.com/sethrojas21/SnapStats",
    },
    {
        name: "85' North",
        description: "Mobile application to view and preorder buffet items at dorm dining hall",
        details: [
            "Built a mobile app concept for browsing and preordering dining hall buffet items.",
            "Designed app screens around quick menu discovery and ordering flows.",
            "Used Swift and SwiftData to structure local app data and interactions.",
        ],
        skills: [Skill.Swift, Skill.SwiftData],
        githubLink: "https://github.com/sethrojas21/85North",
    },
]
