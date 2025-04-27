import { supabaseClient } from "@/lib/supabase";
import {
  Patient,
  PatientListFilters,
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

  // Start building the query
  let query = supabaseClient.from("patients").select("*");

  // Apply filters if available
  if (status) {
    query = query.eq("status", status); // Filter by status
  }
  if (ageRange) {
    const [minAge, maxAge] = ageRange;
    query = query.gte("age", minAge).lte("age", maxAge); // Filter by age range
  }

  // Apply search if available (assuming search is applied to `name` or `id` fields)
  if (search) {
    query = query.like("name", `%${search}%`);
  }

  // Apply sorting
  if (column && order) {
    query = query.order(column, { ascending: order === "asc" }); // Apply sorting by the selected column and order
  }

  // Execute the query and handle errors
  const { data, error } = await query;

  console.log("data", data, filters, sortOption, search);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

type GetPatientDetailParams = {
  id: string;
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

// Add a new note to the patient
export const addPatientNote = async (
  id: string,
  content: string,
  title: string = "New Note"
) => {
  const { data, error } = await supabaseClient
    .from("patient_notes")
    .insert([{ patient_id: id, content, title }])
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
