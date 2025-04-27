import { PatientSortOption } from "./../../../types/patient/index";
import { PatientListFilters, Patient } from "@/types/patient";

export interface UsePatientsListReturn {
  filters: PatientListFilters;
  handleFilterChange: <T extends keyof PatientListFilters>(
    key: T,
    value: PatientListFilters[T]
  ) => void;
  handleSortChange: (value: string) => void;
  patients: Patient[];
  isLoading: boolean;
  isError: boolean;
  sortOption: PatientSortOption;
  handleSearchChange: (value: string) => void;
}
