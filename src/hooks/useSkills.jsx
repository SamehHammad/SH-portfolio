"use client ";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../actions/getData";

const useSkills = () => {
  const { data: skills } = useQuery({
    queryKey: ["skills"],
    queryFn: () => fetchData(`*[_type == "skills"]`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  const { data: education } = useQuery({
    queryKey: ["education"],
    queryFn: () => fetchData(`*[_type == "education"]`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetchData(`*[_type == "courses"] | order(_createdAt desc)`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  const { data: experiences } = useQuery({
    queryKey: ["experiences"],
    queryFn: () =>
      fetchData(`*[_type == "experience"] | order(_createdAt asc)`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  const { data: counters } = useQuery({
    queryKey: ["counters"],
    queryFn: () => fetchData(`*[_type == "counters"]`),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
  });
  return {
    skills,
    education,
    courses,
    experiences,
    counters,
  };
};

export default useSkills;
