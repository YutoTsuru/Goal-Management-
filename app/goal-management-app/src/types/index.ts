export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high';
  startDate: Date;
  endDate: Date;
  progress: number; // percentage
  metrics: Metric[];
}

export interface Metric {
  type: 'count' | 'percentage' | 'custom';
  value: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;
}

export interface HealthData {
  sleepHours: number;
  meals: string[];
  mood: number; // scale of 1 to 10
}

export interface JournalEntry {
  id: string;
  date: Date;
  content: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  goals: Goal[];
  tasks: Task[];
  healthData: HealthData;
}

export interface SocialPost {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}