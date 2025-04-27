import { getPatients } from "@/services/patients";
import { useQuery } from "@tanstack/react-query";

export const usePatientsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
  });
  return {
    patients: data,
    isLoading,
    isError,
  };
};
