import { getSanityImageUrl } from "@/lib/helper";
import React from "react";
import Tilt from "react-parallax-tilt";
import { useTheme } from "next-themes";

//================ Type Definitions ================
interface IconData {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface ServiceData {
  _id: string;
  title: string;
  description: string;
  icon: IconData[] | null;
}

interface ServiceCardProps {
  service: ServiceData;
}

//================ ServiceCard Component ================
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { theme } = useTheme();
  const imageUrl =
    service?.icon?.[0]?.asset?._ref &&
    getSanityImageUrl(service.icon[0].asset._ref);

  return (
    <Tilt
      className={`p-6 rounded-2xl shadow-lg transition duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={service.title}
          className="w-16 h-16 mb-4 mx-auto"
        />
      )}
      <h3 className="text-xl font-bold text-center">{service.title}</h3>
      <p className="text-sm text-center mt-2">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
