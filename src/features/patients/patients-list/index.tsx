"use client";

import { type FC } from "react";
import { usePatientsList } from "./use-patients-list";

import { PatientsListTable } from "./patients-lists-table";
import { PatientListFilter } from "./patients-list-filter";
import { PatientListsSorter } from "./patients-lists-sorter";
import { PatientsListSearchInput } from "./patients-lists-search-input";

export const PatientsList: FC = () => {
  const {
    patients,
    isLoading,
    isError,
    filters,
    handleSearchChange,
    handleFilterChange,
    handleSortChange,
    sortOption,
  } = usePatientsList();

  return (
    <div className="flex flex-col size-full items-start justify-start p-4">
      <div className="lg:text-2xl md:text-xl font-medium mb-4 px-2">
        All Available Patients Dataset:
      </div>
      <PatientsListSearchInput handleSearchChange={handleSearchChange} />
      <div className="flex lg:flex-row flex-col items-center justify-between w-full p-4">
        <PatientListsSorter
          sortOption={sortOption}
          handleSortChange={handleSortChange}
        />
        <PatientListFilter
          filters={filters}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <PatientsListTable
        patientsData={patients}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};
