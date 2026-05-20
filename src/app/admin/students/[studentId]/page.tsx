import { StudentProfile } from "@/components/jmss/admin/student-profile";

export default function StudentProfilePage({ params }: { params: { studentId: string } }) {
  return <StudentProfile studentId={params.studentId} />;
}
