export interface Employee {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  grade: string;
  skills: string[];
  languages: string[];
  mobility: string;
  employmentType: string;
  project: Project;
  onBench: boolean;
  availability: string;
  summary: string;
  preference: Preference;
  experiences: Experience[];
  educations: Education[];
}

export interface Education {
  country: string;
  university: string;
  course: string;
  degree: string;
}

export interface Experience {
  company: string;
  country: string;
  time: string;
  role: string;
  industry: string;
  project: string;
  responsibilities: string;
  skills: string[];
}

export interface Preference {
  languages: string[];
  skills: string[];
  role: string;
  grade: string;
  description: string;
}

export interface Project {
  name: string;
  startDate: number;
  endDate: number;
}
