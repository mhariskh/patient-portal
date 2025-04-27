import { PatientsList } from "@/features/patients/patients-list";

export default function PatientsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <PatientsList />
    </div>
  );
}
