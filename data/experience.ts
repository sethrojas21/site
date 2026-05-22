export enum ExperienceSkill {
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
  R = "R",
  SQLite = "SQLite",
  Streamlit = "Streamlit",
  TeamCollaboration = "Team Collaboration",
  TechnicalCommunication = "Technical Communication",
}

export type Experience = {
  position: string;
  company: string;
  dates: string;
  summary: string;
  skills: ExperienceSkill[];
};

export const experiences: Experience[] = [
  {
    position: "Software Development Intern",
    company: "IBM Storage",
    dates: "May 2026 - August 2026",
    summary:
      "Built an agentic AI infrastructure key-value inference cache flow and presented to IBM Fellows and Senior VPs.",
    skills: [
      ExperienceSkill.AgenticAI,
      ExperienceSkill.Python,
      ExperienceSkill.Infrastructure,
      ExperienceSkill.Caching,
      ExperienceSkill.TechnicalCommunication,
    ],
  },
  {
    position: "Data Science Intern",
    company: "University of Arizona Athletics",
    dates: "October 2025 - Present",
    summary:
      "Built football player valuation models and data pipelines for recruiting analytics.",
    skills: [
      ExperienceSkill.Python,
      ExperienceSkill.PostgreSQL,
      ExperienceSkill.MachineLearning,
      ExperienceSkill.Streamlit,
      ExperienceSkill.ETL,
    ],
  },
  {
    position: "Research Intern",
    company: "University of Arizona, Computer Science",
    dates: "January 2025 - October 2025",
    summary:
      "Developed basketball recruiting metrics, data pipelines, and a dashboard for research presentation.",
    skills: [
      ExperienceSkill.R,
      ExperienceSkill.Python,
      ExperienceSkill.SQLite,
      ExperienceSkill.FastAPI,
      ExperienceSkill.GoogleCloud,
    ],
  },
  {
    position: "Mobile Application Developer Intern",
    company: "University of Arizona, Electrical and Computer Engineering",
    dates: "June 2023 - August 2024",
    summary:
      "Built a Java healthcare stress management app with live biometric data and visualizations.",
    skills: [
      ExperienceSkill.Java,
      ExperienceSkill.MobileDevelopment,
      ExperienceSkill.APIs,
      ExperienceSkill.DataVisualization,
      ExperienceSkill.TeamCollaboration,
    ],
  },
];
