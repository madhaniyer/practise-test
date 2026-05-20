import type { PracticeTest, Question } from "@/types/test";
import type { AttemptRecord } from "@/types/attempt";
import { curatedTestPacks } from "@/lib/tests/curated-test-packs";

export const mockTests: PracticeTest[] = [
  {
    id: "trial-1",
    title: "Trial Test 1",
    subtitle: "15-minute sampler: quick reasoning check",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      // Use first 8 MCQs from first short test + 2 written questions
      ...curatedTestPacks[0].questions.filter(q => q.type === "mcq").slice(0, 8),
      ...curatedTestPacks[0].questions.filter(q => q.type === "written").slice(0, 2),
    ],
  },
  {
    id: "trial-2",
    title: "Trial Test 2",
    subtitle: "15-minute sampler: data + communication",
    kind: "trial",
    released: true,
    durationSec: 15 * 60,
    questions: [
      // Use first 8 MCQs from second short test + 2 written questions
      ...curatedTestPacks[1].questions.filter(q => q.type === "mcq").slice(0, 8),
      ...curatedTestPacks[1].questions.filter(q => q.type === "written").slice(0, 2),
    ],
  },
  // Add all curated test packs (short and full tests)
  ...curatedTestPacks,
];

export const mockStudents = [
  { id: "student-shaunak", name: "Shaunak Madhan",  email: "shaunak@example.com" },
  { id: "student-aarav",   name: "Aarav Sharma",    email: "aarav@example.com" },
  { id: "student-priya",   name: "Priya Patel",     email: "priya@example.com" },
  { id: "student-liam",    name: "Liam Chen",       email: "liam@example.com" },
  { id: "student-sofia",   name: "Sofia Nguyen",    email: "sofia@example.com" },
];

export const mockAttempts: AttemptRecord[] = [
  // Shaunak
  { id: "a-s1", studentId: "student-shaunak", studentName: "Shaunak Madhan", testId: "short-1", score: 70, correctCount: 14, totalMcq: 20, startedAt: "2026-05-01T09:00:00Z", submittedAt: "2026-05-01T09:45:00Z", durationSeconds: 2700, strengths: ["Cell Biology", "Genetics"], improvements: ["Chemistry", "Scientific Writing"], answers: {} },
  { id: "a-s2", studentId: "student-shaunak", studentName: "Shaunak Madhan", testId: "short-2", score: 75, correctCount: 15, totalMcq: 20, startedAt: "2026-05-03T09:00:00Z", submittedAt: "2026-05-03T09:45:00Z", durationSeconds: 2700, strengths: ["Genetics", "Evolution"], improvements: ["Physics", "Data Analysis"], answers: {} },
  { id: "a-s3", studentId: "student-shaunak", studentName: "Shaunak Madhan", testId: "short-3", score: 80, correctCount: 16, totalMcq: 20, startedAt: "2026-05-05T09:00:00Z", submittedAt: "2026-05-05T09:45:00Z", durationSeconds: 2700, strengths: ["Chemistry", "Atomic Structure"], improvements: ["Ecology", "Scientific Reporting"], answers: {} },
  { id: "a-s4", studentId: "student-shaunak", studentName: "Shaunak Madhan", testId: "full-1", score: 78, correctCount: 47, totalMcq: 60, startedAt: "2026-05-08T09:00:00Z", submittedAt: "2026-05-08T11:30:00Z", durationSeconds: 9000, strengths: ["Biology", "Chemistry"], improvements: ["Physics", "Earth Science"], answers: {} },
  { id: "a-s5", studentId: "student-shaunak", studentName: "Shaunak Madhan", testId: "short-4", score: 85, correctCount: 17, totalMcq: 20, startedAt: "2026-05-10T09:00:00Z", submittedAt: "2026-05-10T09:45:00Z", durationSeconds: 2700, strengths: ["Forces", "Energy"], improvements: ["Waves", "Scientific Writing"], answers: {} },
  // Aarav
  { id: "a-a1", studentId: "student-aarav", studentName: "Aarav Sharma", testId: "short-1", score: 85, correctCount: 17, totalMcq: 20, startedAt: "2026-05-04T17:55:00Z", submittedAt: "2026-05-04T18:40:00Z", durationSeconds: 2750, strengths: ["Cell Biology", "Genetics", "Scientific Method"], improvements: ["Data Analysis", "Scientific Writing"], answers: {} },
  { id: "a-a2", studentId: "student-aarav", studentName: "Aarav Sharma", testId: "full-1", score: 72, correctCount: 43, totalMcq: 60, startedAt: "2026-05-05T09:00:00Z", submittedAt: "2026-05-05T11:30:00Z", durationSeconds: 9000, strengths: ["Experimental Design", "Chemistry"], improvements: ["Scientific Literacy", "Scientific Reporting"], answers: {} },
  { id: "a-a3", studentId: "student-aarav", studentName: "Aarav Sharma", testId: "short-2", score: 90, correctCount: 18, totalMcq: 20, startedAt: "2026-05-07T10:00:00Z", submittedAt: "2026-05-07T10:45:00Z", durationSeconds: 2700, strengths: ["Genetics", "Evolution"], improvements: ["Earth Science"], answers: {} },
  // Priya
  { id: "a-p1", studentId: "student-priya", studentName: "Priya Patel", testId: "short-1", score: 90, correctCount: 18, totalMcq: 20, startedAt: "2026-05-02T10:00:00Z", submittedAt: "2026-05-02T10:45:00Z", durationSeconds: 2700, strengths: ["Chemistry", "Physics"], improvements: ["Biology"], answers: {} },
  { id: "a-p2", studentId: "student-priya", studentName: "Priya Patel", testId: "short-2", score: 95, correctCount: 19, totalMcq: 20, startedAt: "2026-05-04T10:00:00Z", submittedAt: "2026-05-04T10:45:00Z", durationSeconds: 2700, strengths: ["Genetics", "Scientific Method"], improvements: ["Earth Science"], answers: {} },
  { id: "a-p3", studentId: "student-priya", studentName: "Priya Patel", testId: "full-1", score: 88, correctCount: 53, totalMcq: 60, startedAt: "2026-05-06T09:00:00Z", submittedAt: "2026-05-06T11:30:00Z", durationSeconds: 9000, strengths: ["Chemistry", "Physics", "Biology"], improvements: ["Scientific Writing"], answers: {} },
  // Liam
  { id: "a-l1", studentId: "student-liam", studentName: "Liam Chen", testId: "short-1", score: 65, correctCount: 13, totalMcq: 20, startedAt: "2026-05-03T14:00:00Z", submittedAt: "2026-05-03T14:45:00Z", durationSeconds: 2700, strengths: ["Physics"], improvements: ["Biology", "Chemistry", "Scientific Writing"], answers: {} },
  { id: "a-l2", studentId: "student-liam", studentName: "Liam Chen", testId: "short-2", score: 70, correctCount: 14, totalMcq: 20, startedAt: "2026-05-06T14:00:00Z", submittedAt: "2026-05-06T14:45:00Z", durationSeconds: 2700, strengths: ["Forces", "Energy"], improvements: ["Genetics", "Ecology"], answers: {} },
  // Sofia
  { id: "a-f1", studentId: "student-sofia", studentName: "Sofia Nguyen", testId: "short-1", score: 80, correctCount: 16, totalMcq: 20, startedAt: "2026-05-05T11:00:00Z", submittedAt: "2026-05-05T11:45:00Z", durationSeconds: 2700, strengths: ["Ecology", "Earth Science"], improvements: ["Physics", "Chemistry"], answers: {} },
  { id: "a-f2", studentId: "student-sofia", studentName: "Sofia Nguyen", testId: "short-2", score: 85, correctCount: 17, totalMcq: 20, startedAt: "2026-05-08T11:00:00Z", submittedAt: "2026-05-08T11:45:00Z", durationSeconds: 2700, strengths: ["Ecology", "Genetics"], improvements: ["Physics"], answers: {} },
  { id: "a-f3", studentId: "student-sofia", studentName: "Sofia Nguyen", testId: "full-1", score: 82, correctCount: 49, totalMcq: 60, startedAt: "2026-05-10T09:00:00Z", submittedAt: "2026-05-10T11:30:00Z", durationSeconds: 9000, strengths: ["Biology", "Earth Science"], improvements: ["Chemistry", "Physics"], answers: {} },
];