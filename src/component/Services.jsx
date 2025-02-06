import React from "react";

const services = [
  "SRO",
  "Brand Marketing",
  "AI & Automation",
  "Technology",
  "Predictive Analytics",
  "Workflow Automation",
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-center text-xl font-semibold mb-4">Our Services:</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="m-2 px-4 py-2 bg-white shadow-md rounded-md">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
