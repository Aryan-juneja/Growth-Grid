import React from "react";

const Solutions = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-black">Explore Solutions Designed to Solve Your Challenges</h2>
      <p className="text-lg text-gray-600 mt-4">
        Our tailored services are built to address your unique pain points and deliver transformative results.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {[
          "Social Media Management", "Paid Advertising", "Content Creation", "Website and App Development",
          "E-Commerce Optimization", "Workflow Automation", "Predictive Analytics", "Data and Cloud Solutions",
          "Custom Tech Solutions"
        ].map((service) => (
          <button key={service} className="px-4 py-2 border rounded-md bg-white hover:bg-gray-200">
            {service}
          </button>
        ))}
      </div>

      <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
        Explore All Services
      </button>
    </section>
  );
};

export default Solutions;
