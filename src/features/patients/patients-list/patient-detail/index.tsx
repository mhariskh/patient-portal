import { type FC } from "react";
import { useParams } from "next/navigation";
import { usePatientDetail } from "./use-patient-detail";

export const PatientDetail: FC = () => {
  const { id } = useParams();
  const { patientData } = usePatientDetail(id);
  return <div className="">PatientDetail {id}</div>;
};
