import { Tech } from "@/types/tech";

export type Project = {
  name: string;
  description: string;
  tech: Tech[];
  githubLink?: string;
  projLink?: string;
};