import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { type FC } from "react";

type Note = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

type PatientNotesListProps = {
  notes: Note[];
};

export const PatientNotesList: FC<PatientNotesListProps> = ({ notes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Notes</CardTitle>
        <CardDescription>
          Total {notes.length} notes in latest to oldest order
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notes.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No notes available
            </p>
          ) : (
            notes.map((note, index) => (
              <div key={note.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{note.title}</h3>
                  <time className="text-sm text-muted-foreground">
                    {format(
                      new Date(note.timestamp),
                      "MMM d, yyyy 'at' h:mm a"
                    )}
                  </time>
                </div>
                <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                {index < notes.length - 1 && <Separator className="my-4" />}
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
