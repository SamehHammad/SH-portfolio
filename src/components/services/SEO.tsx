import React from 'react'
import ServiceCard from './ServiceCard';

const SEO = ({services}) => {

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service, index) => (
          <ServiceCard service={service} index={index} key={service._id} />
        ))}
      </div>
    );
}

export default SEO