import { FC } from "react";
import { usePatientListsSorter } from "./use-patient-lists-sorter";
import { UsePatientsListReturn } from "../patients-list.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PatientListsSorterProps {
  sortOption: UsePatientsListReturn["sortOption"];
  handleSortChange: UsePatientsListReturn["handleSortChange"];
}

export const PatientListsSorter: FC<PatientListsSorterProps> = ({
  sortOption,
  handleSortChange,
}) => {
  const { sortingOptions } = usePatientListsSorter();

  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center justify-start  w-full p-4">
      <label>Sort By</label>
      <Select
        value={`${sortOption.column}-${sortOption.order}`}
        onValueChange={handleSortChange}
      >
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder="Select sorting option" />
        </SelectTrigger>
        <SelectContent>
          {sortingOptions.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
