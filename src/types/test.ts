export type QuestionType = "mcq" | "written";

export interface Question {
  id: string;
  section: string;
  topic: string;
  difficulty: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
  rubric?: string[];
  modelAnswer?: string;
}

export interface PracticeTest {
  id: string;
  title: string;
  subtitle: string;
  released: boolean;
  durationSec: number;
  questions: Question[];
}
