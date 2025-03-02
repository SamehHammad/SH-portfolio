"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../actions/getData";

const useInfo = () => {
  const { data: info, isLoading, isError, error } = useQuery({
    queryKey: ["info"],
    queryFn: () => fetchData(`*[_type == "about"]`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    retry: 2,
  });

  return {
    info,
    isLoading,
    isError,
    error,
  };
};

export default useInfo;
