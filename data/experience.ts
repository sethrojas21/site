export enum Skill {
  AgenticAI = "Agentic AI",
  APIs = "APIs",
  Caching = "Caching",
  DataVisualization = "Data Visualization",
  ETL = "ETL",
  FastAPI = "FastAPI",
  GoogleCloud = "Google Cloud",
  Infrastructure = "Infrastructure",
  Java = "Java",
  MachineLearning = "Machine Learning",
  MobileDevelopment = "Mobile Development",
  PostgreSQL = "PostgreSQL",
  Python = "Python",
  React = "React",
  Expo = "Expo",
  R = "R",
  SQL = "SQL",
  SQLite = "SQLite",
  Streamlit = "Streamlit",
  Swift = "Swift",
  SwiftData = "SwiftData",
  TeamCollaboration = "Team Collaboration",
  TechnicalCommunication = "Technical Communication",
  TypeScript = "TypeScript",
}

export type Experience = {
  position: string;
  company: string;
  dates: string;
  summary: string;
  skills: Skill[];
};

export const experiences: Experience[] = [
  {
    position: "Software Development Intern",
    company: "IBM Storage",
    dates: "May 2026 - Present",
    summary:
      "Built an agentic AI infrastructure key-value inference cache flow and presented to IBM Fellows and Senior VPs.",
    skills: [
      Skill.AgenticAI,
      Skill.Python,
      Skill.Infrastructure,
      Skill.Caching,
      Skill.TechnicalCommunication,
    ],
  },
  {
    position: "Data Science Intern",
    company: "University of Arizona Athletics",
    dates: "October 2025 - Present",
    summary:
      "Built football player valuation models and data pipelines for recruiting analytics.",
    skills: [
      Skill.Python,
      Skill.PostgreSQL,
      Skill.MachineLearning,
      Skill.Streamlit,
      Skill.ETL,
    ],
  },
  {
    position: "Research Intern",
    company: "University of Arizona, Computer Science",
    dates: "January 2025 - October 2025",
    summary:
      "Developed basketball recruiting metrics, data pipelines, and a dashboard for research presentation.",
    skills: [
      Skill.R,
      Skill.Python,
      Skill.SQLite,
      Skill.FastAPI,
      Skill.GoogleCloud,
    ],
  },
  {
    position: "Mobile Developer Intern",
    company: "University of Arizona, Electrical and Computer Engineering",
    dates: "June 2023 - August 2024",
    summary:
      "Built a Java healthcare stress management app with live biometric data and visualizations.",
    skills: [
      Skill.Java,
      Skill.MobileDevelopment,
      Skill.APIs,
      Skill.DataVisualization,
      Skill.TeamCollaboration,
    ],
  },
];
