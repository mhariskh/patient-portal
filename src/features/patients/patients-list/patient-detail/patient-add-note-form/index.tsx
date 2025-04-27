import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FC, type ChangeEvent } from "react";

type NoteData = {
  title: string;
  content: string;
};

type PatientAddNoteFormProps = {
  noteData: NoteData;
  onNoteDataChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onAddNote: () => void;
  isPending: boolean;
};

export const PatientAddNoteForm: FC<PatientAddNoteFormProps> = ({
  noteData,
  onNoteDataChange,
  onAddNote,
  isPending,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Note</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label htmlFor="title" className="text-sm font-medium block mb-2">
            Title
          </label>
          <Input
            id="title"
            name="title"
            placeholder="Enter note title..."
            value={noteData.title}
            onChange={onNoteDataChange}
          />
        </div>
        <div>
          <label htmlFor="content" className="text-sm font-medium block mb-2">
            Content
          </label>
          <Textarea
            id="content"
            name="content"
            placeholder="Enter note content..."
            value={noteData.content}
            onChange={onNoteDataChange}
            className="min-h-24"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          onClick={onAddNote}
          disabled={
            !noteData.content.trim() || !noteData.title.trim() || isPending
          }
        >
          {isPending ? "Adding..." : "Add Note"}
        </Button>
      </CardFooter>
    </Card>
  );
};
