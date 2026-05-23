export enum Skill {
  AgenticAI = "Agentic AI",
  APIs = "APIs",
  Caching = "Caching",
  DataVisualization = "Data Visualization",
  ETL = "ETL",
  FastAPI = "FastAPI",
  GoogleCloud = "Google Cloud",
  Gemini = "Gemini",
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
  RAG = "RAG",
  Supabase = "Supabase",
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
  details: string[];
  skills: Skill[];
};

export const experiences: Experience[] = [
  {
    position: "Software Development Intern",
    company: "IBM Storage",
    dates: "May 2026 - Present",
    summary:
      "Built an agentic AI infrastructure key-value inference cache flow and presented to IBM Fellows and Senior VPs.",
    details: [
      "Designed an agentic AI inference-cache flow for infrastructure key-value workloads.",
      "Presented the technical direction and prototype to IBM Fellows and Senior VPs.",
      "Focused on reducing repeated inference work through reusable cache-aware system design.",
    ],
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
    details: [
      "Built player valuation models to support football transfer portal recruiting decisions.",
      "Designed ETL workflows for loading and querying recruiting data in PostgreSQL.",
      "Presented analytics findings to non-technical stakeholders to improve usability and decision support.",
    ],
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
    details: [
      "Engineered basketball recruiting metrics to quantify player fit and value.",
      "Built scraping and ETL pipelines for collecting player data across online sources.",
      "Deployed a dashboard and backend to present research results to academics and athletics stakeholders.",
    ],
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
    details: [
      "Collaborated on a 3-person team to build a Java stress-management tracker.",
      "Integrated live heart rate variability API data with guided breathing exercises.",
      "Implemented post-session visualizations to help users review biometric trends.",
    ],
    skills: [
      Skill.Java,
      Skill.MobileDevelopment,
      Skill.APIs,
      Skill.DataVisualization,
      Skill.TeamCollaboration,
    ],
  },
];
