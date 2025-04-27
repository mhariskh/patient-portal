import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import { PatientStatus } from "@/types/patient";
import { FC } from "react";
import { UsePatientsListReturn } from "../patients-list.types";

interface PatientListFilterProps {
  filters: UsePatientsListReturn["filters"];
  handleFilterChange: UsePatientsListReturn["handleFilterChange"];
}

export const PatientListFilter: FC<PatientListFilterProps> = ({
  filters,
  handleFilterChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-end w-full p-4">
      Filter By:
      <div className="flex  gap-2 items-center justify-center">
        <Label>Status</Label>
        <Select
          value={filters.status}
          onValueChange={(value: PatientStatus) =>
            handleFilterChange("status", value)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="stable">Stable</SelectItem>
            <SelectItem value="needs_attention">Needs Attention</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <Label>
          Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}
        </Label>
        <Slider
          min={0}
          max={100}
          step={1}
          value={filters.ageRange}
          onValueChange={(value) => {
            if (value.length === 2) {
              handleFilterChange("ageRange", [value[0], value[1]]);
            }
          }}
        />
      </div>
    </div>
  );
};
