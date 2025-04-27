import { addPatientNote, getPatientDetail } from "@/services/patients";
import { Patient, PatientNote } from "@/types/patient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

interface PatientDetailData {
  patient: Omit<Patient, "notes">;
  notes: PatientNote[];
}

export const usePatientDetail = (id: string) => {
  const [newNoteData, setNewNoteData] = useState({
    title: "",
    content: "",
  });

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["patientDetail", id],
    queryFn: () => getPatientDetail({ id }),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: ({
      id,
      newNoteContent,
      title,
    }: {
      id: string;
      newNoteContent: string;
      title: string;
    }) => {
      return addPatientNote({
        id,
        content: newNoteContent,
        title,
      });
    },
    onMutate: async ({ id, newNoteContent, title }) => {
      await queryClient.cancelQueries({ queryKey: ["patientDetail", id] });

      const previousData = queryClient.getQueryData<PatientDetailData>([
        "patientDetail",
        id,
      ]);

      queryClient.setQueryData(
        ["patientDetail", id],
        (oldData: PatientDetailData | undefined) => {
          if (!oldData) return oldData;

          const optimisticNote: PatientNote = {
            id: `temp-${Date.now()}`,
            content: newNoteContent,
            title: title,
            timestamp: new Date().toISOString(),
          };

          return {
            ...oldData,
            notes: [optimisticNote, ...(oldData.notes || [])],
          };
        }
      );

      return { previousData };
    },
    onError: (
      err,
      { id },
      context?: { previousData: PatientDetailData | undefined }
    ) => {
      if (context?.previousData) {
        queryClient.setQueryData<PatientDetailData>(
          ["patientDetail", id],
          context.previousData
        );
      }
      toast.error(
        `Failed to add note: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    },
    onSuccess: () => {
      toast.success("Note added successfully!");
    },
    onSettled: (_, __, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["patientDetail", id] });
    },
  });

  const handleNoteDataChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setNewNoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNote = () => {
    if (newNoteData.content.trim()) {
      mutation.mutate({
        id,
        newNoteContent: newNoteData.content,
        title: newNoteData.title || "New Note",
      });
      setNewNoteData({
        title: "",
        content: "",
      });
    } else {
      toast.error("Note content is required.");
    }
  };

  return {
    patientData: data,
    isLoading,
    isError,
    error,
    newNoteData,
    handleNoteDataChange,
    handleAddNote,
    mutation,
  };
};
