import { getSanityImageUrl } from "@/lib/helper";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { ServiceCardProps } from "@/utils/types";



//================ ServiceCard Component ================
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const imageUrl = service.icon?.[0]?.asset?._ref
    ? getSanityImageUrl(service.icon[0].asset._ref)
    : null;

  return (
    <Tilt
      className={`p-4 rounded-2xl shadow-lg transition duration-300 py-5 min-h-[300px] h-auto card mb-4`}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={service.title}
          className="w-16 h-16 mb-4 mx-auto"
          width={64}
          height={64}
        />
      )}
      <h3 className="card-title text-center">{service.title}</h3>
      <p className="card-description text-center mt-2">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
