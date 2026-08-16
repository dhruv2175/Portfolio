export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'WordPress' | 'Shopify' | 'React' | 'Moodle';
  year: string;
  techStack: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string; badge: string }[];
  accentColor: string;
  imageBg: string;
  featuredImg: string;
  link?: string;
  caseStudyDetails: {
    overview: string;
    highlights: string[];
    architecture: string;
    clientInfo?: {
      industry: string;
      scope: string;
      timeline: string;
      location: string;
    };
    problemDetails?: string[];
    solutionDetails?: string[];
    codeSnippet?: {
      filename: string;
      language: string;
      code: string;
    };
    comparisonMetrics?: {
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }[];
    takeaways?: string[];
    testimonial?: {
      quote: string;
      author: string;
      title: string;
    };
  };
}

export interface SkillSubItem {
  name: string;
  level: string;
  description: string;
  badge?: string;
}

export interface SkillPillar {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  accent: string;
  bgAccent: string;
  iconName: string;
  experience: string;
  subSkills: SkillSubItem[];
}

export interface Skill {
  name: string;
  category: 'Product & UI/UX' | 'Graphic Design' | 'Vector & Assets' | 'Print & Layout' | 'Workflow & Strategy' | 'CMS & E-Commerce' | 'Backend & DB' | 'Frontend' | 'Development Tools';
  level: string;
  accent: string;
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  accent: string;
  highlights: string[];
  technologies: string[];
}
