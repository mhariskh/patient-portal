import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useParams } from "next/navigation";
import { type FC } from "react";
import { usePatientDetail } from "./use-patient-detail";
import { Spinner } from "@/components/spinner";
import { PatientAddNoteForm } from "./patient-add-note-form";
import { PatientNotesList } from "./patient-notes-list";
import { PatientSummaryCard } from "./patient-summary-card";

export const PatientDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    patientData,
    isLoading,
    isError,
    newNoteData,
    handleNoteDataChange,
    handleAddNote,
    mutation,
  } = usePatientDetail(id as string);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error Occurred While Getting Details.</div>;
  }

  if (!patientData || !patientData.patient) {
    return (
      <Alert>
        <AlertTitle>No data</AlertTitle>
        <AlertDescription>Patient data not found</AlertDescription>
      </Alert>
    );
  }

  const { patient, notes } = patientData;

  return (
    <div className="flex flex-col gap-6 p-4">
      <PatientSummaryCard
        name={patient.name}
        status={patient.status}
        age={patient.age}
        heartRate={patient.heartRate}
      />

      <PatientAddNoteForm
        noteData={newNoteData}
        onNoteDataChange={handleNoteDataChange}
        onAddNote={handleAddNote}
        isPending={mutation.isPending}
      />

      <PatientNotesList notes={notes} />
    </div>
  );
};
