export type AppRole = "student" | "admin";

export interface Profile {
  id: string;
  email: string;
  fullName: string;
  role: AppRole;
}
