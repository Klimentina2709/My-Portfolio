export interface ExperiencesType {
  id: number;
  type: string;
  title: string;
  duration: string;
  details: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  viewProjectLink?: string;
  viewCodeLink: string;
  image: string;
  secondImage: string;
  detailedDescription: string;
  features: string[];
  duration: string;
}

export interface Database {
  projects: Project[];
}

export interface Accordion {
  question: string;
  answer: string;
}

export interface QuestionAndAnswers {
  accordion: Accordion[];
}

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
  viewCodeLink: string;
}
