import type { Skill } from "@/data/experience";

export type Project = {
  name: string;
  description: string;
  skills: Skill[];
  githubLink?: string;
  projLink?: string;
};
