export interface LearningProgress {
    id: string;
    title: string;
    lessonsCompleted: number;
    totalLessons: number;
    progress: number; // in percentage
  }