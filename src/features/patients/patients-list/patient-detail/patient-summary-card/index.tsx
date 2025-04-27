import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type FC } from "react";

type PatientSummaryCardProps = {
  name: string;
  status: string;
  age: number;
  heartRate: number;
};

export const PatientSummaryCard: FC<PatientSummaryCardProps> = ({
  name,
  status,
  age,
  heartRate,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <div className="capitalize font-bold">{status.replace("_", " ")}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Age</p>
            <p>{age} years</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Heart Rate
            </p>
            <p>{heartRate} BPM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
