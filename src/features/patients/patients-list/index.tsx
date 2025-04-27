"use client";
import { Spinner } from "@/components/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type FC } from "react";
import { usePatientsList } from "./use-patients-list";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const PatientsList: FC = () => {
  const { patients, isLoading, isError } = usePatientsList();
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div className="text-red-500">Error fetching patients</div>;
  }
  return (
    <div className="flex flex-col size-full items-start justify-start p-4">
      <div className="lg:text-2xl md:text-xl font-medium mb-4 px-2">
        All Available Patients Dataset:
      </div>
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
          {patients != null &&
            patients.map((patient, index) => (
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
    </div>
  );
};
