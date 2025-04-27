import { PATIENT_LIST_COLUMN_NAMES } from "@/constants/patient";

export const PATIENT_SORT_COLUMNS = {
  name: PATIENT_LIST_COLUMN_NAMES.name,
  heartRate: PATIENT_LIST_COLUMN_NAMES.heartRate,
} as const;

export const PATIENT_SORT_ORDERS = {
  asc: "asc",
  desc: "desc",
} as const;
