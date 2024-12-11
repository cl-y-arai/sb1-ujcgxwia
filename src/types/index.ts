export interface Competition {
  id: string;
  title: string;
  description: string;
  prize: string;
  deadline: string;
  participants: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  imageUrl: string;
  overview?: string;
  rules?: string[];
  evaluation?: string;
  timeline?: {
    start: string;
    end: string;
    evaluation: string;
  };
  prizes?: {
    first: string;
    second: string;
    third: string;
  };
  dataset?: {
    description: string;
    size: string;
    format: string;
  };
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  score: number;
}