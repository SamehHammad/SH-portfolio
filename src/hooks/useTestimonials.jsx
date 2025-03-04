"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../actions/getData";

const useTestimonials= () => {
  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => fetchData(`*[_type == "testimonials"]`),
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 10, 
    retry: 2,
  });

  return {
    testimonials,
    isLoading,
    error,
  };
};

export default useTestimonials;
