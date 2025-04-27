import { supabaseClient } from "@/lib/supabase";
import {
  Patient,
  PatientListFilters,
  PatientNote,
  PatientSortOption,
} from "@/types/patient";

interface GetPatientsParams {
  filters: PatientListFilters;
  sortOption: PatientSortOption;
  search: string;
}

export const getPatients = async ({
  filters,
  sortOption,
  search,
}: GetPatientsParams): Promise<Patient[]> => {
  const { status, ageRange } = filters;
  const { column, order } = sortOption;

  let query = supabaseClient.from("patients").select("*");

  if (status) {
    query = query.eq("status", status);
  }
  if (ageRange) {
    const [minAge, maxAge] = ageRange;
    query = query.gte("age", minAge).lte("age", maxAge);
  }

  if (search) {
    query = query.like("name", `%${search}%`);
  }

  if (column && order) {
    query = query.order(column, { ascending: order === "asc" });
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

type GetPatientDetailParams = {
  id: string;
};

type AddPatientNoteParams = {
  id: string;
  content: PatientNote["content"];
  title: PatientNote["title"];
};

export const getPatientDetail = async ({ id }: GetPatientDetailParams) => {
  const { data: patient, error: patientError } = await supabaseClient
    .from("patients")
    .select("id, name, age, heartRate, status")
    .eq("id", id)
    .single();

  if (patientError) {
    throw new Error(patientError.message);
  }

  const { data: notes, error: notesError } = await supabaseClient
    .from("patient_notes")
    .select("id, title, content, timestamp")
    .eq("patient_id", id)
    .order("timestamp", { ascending: false });

  if (notesError) {
    throw new Error(notesError.message);
  }

  return { patient, notes };
};

export const addPatientNote = async ({
  id,
  content,
  title,
}: AddPatientNoteParams): Promise<PatientNote> => {
  const { data, error } = await supabaseClient
    .from("patient_notes")
    .insert([{ patient_id: id, content, title }])
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
