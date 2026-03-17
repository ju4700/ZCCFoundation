export enum ContestStatus {
  DRAFT = 'draft',
  UPCOMING = 'upcoming',
  ACTIVE = 'active',
  ENDED = 'ended',
}

export enum SubmissionStatus {
  PENDING = 'pending',
  RUNNING = 'running',
  ACCEPTED = 'accepted',
  WRONG_ANSWER = 'wrong_answer',
  TIME_LIMIT_EXCEEDED = 'time_limit_exceeded',
  RUNTIME_ERROR = 'runtime_error',
  COMPILATION_ERROR = 'compilation_error',
}

export interface Contest {
  id: number;
  title: string;
  description: string;
  status: ContestStatus;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Problem {
  id: number;
  contestId: number;
  title: string;
  description: string;
  timeLimit: number;
  memoryLimit: number;
  points: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Submission {
  id: number;
  userId: number;
  problemId: number;
  contestId: number;
  code: string;
  language: string;
  status: SubmissionStatus;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface LeaderboardEntry {
  userId: number;
  contestId: number;
  totalScore: number;
  rank: number;
  updatedAt: Date;
}
