import React from "react";
import ServiceCard, { ServiceData } from "./ServiceCard";

interface ResponsiveProps {
  services: ServiceData[];
}

const Responsive: React.FC<ResponsiveProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {services?.map((service) => (
        <ServiceCard service={service} key={service._id} />
      ))}
    </div>
  );
};

export default Responsive;
