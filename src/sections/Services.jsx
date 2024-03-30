import React from "react";
import { services } from "../constants";
import Service from "../components/Service";
const Services = () => {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
      {services.map((service) => (
        <Service key={service.label} service={service} />
      ))}
    </section>
  );
};

export default Services;
