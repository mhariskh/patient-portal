import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold ">Patient Portal</h1>
      <p className="text-lg">
        Click on the button below to view the patients list
      </p>
      <Button variant="outline" asChild>
        <Link href="/patients">View Patients List</Link>
      </Button>
    </div>
  );
}
