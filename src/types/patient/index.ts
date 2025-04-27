import { PATIENT_LIST_COLUMN_NAMES } from "@/constants/patient";
import {
  PATIENT_SORT_COLUMNS,
  PATIENT_SORT_ORDERS,
} from "@/features/patients/patients-list/patients-list.constants";

export const PATIENT_STATUSES = {
  stable: "stable",
  needs_attention: "needs_attention",
  critical: "critical",
} as const;

export type PatientStatus = keyof typeof PATIENT_STATUSES;

export interface PatientNote {
  id: string;
  content: string;
  title: string;
  timestamp: string;
}

export interface Patient {
  [PATIENT_LIST_COLUMN_NAMES.id]: string;
  [PATIENT_LIST_COLUMN_NAMES.name]: string;
  [PATIENT_LIST_COLUMN_NAMES.age]: number;
  [PATIENT_LIST_COLUMN_NAMES.status]: PatientStatus;
  [PATIENT_LIST_COLUMN_NAMES.heartRate]: number;
  notes: PatientNote[];
}

// Sorting options defined as constants

export interface PatientListFilters {
  status: PatientStatus;
  ageRange: [number, number];
}

export type SortColumn = keyof typeof PATIENT_SORT_COLUMNS;
export type SortOrder = keyof typeof PATIENT_SORT_ORDERS;

export interface PatientSortOption {
  column: SortColumn;
  order: SortOrder;
}
