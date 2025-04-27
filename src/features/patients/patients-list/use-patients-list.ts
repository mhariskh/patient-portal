import { debounce } from "lodash";
import {
  PATIENT_STATUSES,
  PatientListFilters,
  PatientSortOption,
} from "./../../../types/patient/index";
import { getPatients } from "@/services/patients";
import { useQuery } from "@tanstack/react-query";

import { useCallback, useState } from "react";
import {
  PATIENT_SORT_COLUMNS,
  PATIENT_SORT_ORDERS,
} from "./patients-list.constants";
import { QUERY_KEYS } from "@/constants/query-keys";

export const usePatientsList = () => {
  const [search, setSearch] = useState<string>("");

  const [sortOption, setSortOption] = useState<PatientSortOption>({
    column: PATIENT_SORT_COLUMNS.name,
    order: PATIENT_SORT_ORDERS.asc,
  });

  const [filters, setFilters] = useState<PatientListFilters>({
    status: PATIENT_STATUSES.stable,
    ageRange: [0, 100],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 500),
    [] // No dependencies, because debounced function is created only once
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.allPatientsList, search, filters, sortOption],
    queryFn: () => getPatients({ filters, sortOption, search }),
  });

  const handleFilterChange = <T extends keyof PatientListFilters>(
    key: T,
    value: PatientListFilters[T]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSortChange = (value: string) => {
    const [column, order] = value.split("-");

    setSortOption({
      column: column as keyof typeof PATIENT_SORT_COLUMNS,
      order: order as keyof typeof PATIENT_SORT_ORDERS,
    });
  };

  return {
    search,
    sortOption,
    filters,
    handleFilterChange,
    handleSortChange,
    handleSearchChange,
    patients: data ?? [],
    isLoading,
    isError,
  };
};
