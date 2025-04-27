import { FC } from "react";
import { UsePatientsListReturn } from "../patients-list.types";
import { Input } from "@/components/ui/input";

type PatientsListSearchInputProps = {
  handleSearchChange: UsePatientsListReturn["handleSearchChange"];
};

export const PatientsListSearchInput: FC<PatientsListSearchInputProps> = ({
  handleSearchChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 p-6 items-center justify-center w-full">
      <label htmlFor="search" className="text-sm text-gray-700">
        Search Patients
      </label>
      <Input
        id="search"
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleSearchChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
};
