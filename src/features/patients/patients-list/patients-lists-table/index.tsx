import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Patient } from "@/types/patient";
import Link from "next/link";

import { type FC } from "react";

interface PatientsListTableProps {
  patientsData: Patient[];
  isLoading: boolean;
  isError: boolean;
}

export const PatientsListTable: FC<PatientsListTableProps> = ({
  patientsData,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center">
        <Spinner className="size-9" />
      </div>
    );
  }
  if (isError) {
    return <div className="text-red-500">Error fetching patients</div>;
  }
  if (!patientsData.length) {
    return (
      <div className="text-lg font-light flex items-center justify-center w-full">
        No patients found...
      </div>
    );
  }
  return (
    <Table className="lg:text-xl md:text-lg size-full p-0 ">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Heart Rate</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patientsData.map((patient, index) => (
          <TableRow key={patient.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{patient.name}</TableCell>
            <TableCell>{patient.age}</TableCell>
            <TableCell>{patient.heartRate}</TableCell>
            <TableCell className="capitalize">{patient.status}</TableCell>
            <TableCell className="">
              <Button asChild variant="default">
                <Link
                  href={`/patients/${patient.id}`}
                  className="text-blue-500"
                >
                  View
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
