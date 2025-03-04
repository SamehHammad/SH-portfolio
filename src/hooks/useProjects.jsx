"use client ";
import { fetchData } from "@/actions/getData";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchData(`*[_type == "project"]`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  return {
    projects,
  };
};

export default useProjects;
