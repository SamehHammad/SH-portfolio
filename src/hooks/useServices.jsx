"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../actions/getData";

const useServices = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ["services"],
    queryFn: () => fetchData(`*[_type == "services"]`),
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 10, 
    retry: 2,
  });

  return {
    services,
    isLoading,
    error,
  };
};

export default useServices;
