import React from "react";
import ServiceCard, { ServiceData } from "./ServiceCard";

interface SEOProps {
  services: ServiceData[];
}

const Performance: React.FC<SEOProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {services?.map((service) => (
        <ServiceCard service={service} key={service._id} />
      ))}
    </div>
  );
};

export default Performance;
