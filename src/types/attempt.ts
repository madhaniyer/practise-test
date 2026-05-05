export interface AttemptSummary {
  headline: string;
  praise: string;
  growth: string;
  coaching: string;
}

export interface AttemptRecord {
  id: string;
  studentId: string;
  studentName: string;
  testId: string;
  score: number;
  correctCount: number;
  totalMcq: number;
  startedAt: string;
  submittedAt: string;
  durationSeconds: number;
  strengths: string[];
  improvements: string[];
  answers: Record<string, string | number>;
  summary?: AttemptSummary;
}
