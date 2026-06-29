export interface Skill {
  name: string;
  category: 'languages' | 'cybersecurity' | 'cloud_ops' | 'tools';
  level: number; // 0 to 100
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string; // "Internship" | "Full-time"
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise' | 'Academic' | 'Personal';
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  details: string[];
  github?: string;
  demo?: string;
}
