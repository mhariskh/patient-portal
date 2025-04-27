import { supabaseClient } from "@/lib/supabase";
import { Patient } from "@/types/patient";

export const getPatients = async (): Promise<Patient[]> => {
  const { data, error } = await supabaseClient.from("patients").select("*");
  console.log("data", data);

  if (error) {
    throw new Error(error.message);
  }

  return data as Patient[];
};
