// this is page.tsx of patients folder inside app folder of next js
// please import the patients list component

import { PatientsList } from "@/features/patients/patients-list";

export default function PatientsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <PatientsList />
    </div>
  );
}
