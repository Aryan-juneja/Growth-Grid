import React from "react";
import { Link } from "react-router-dom"; 
import image151 from "./../assets/images/image151.jpeg";

const services = [
  { title: "Social Media Management", path: "/social-media-management" },
  { title: "Paid Advertising", path: "#" },
  { title: "Content Creation", path: "#" },
  { title: "Website and App Development", path: "#" },
  { title: "E-Commerce Optimization", path: "#" },
  { title: "Workflow Automation", path: "#" },
  { title: "Predictive Analytics", path: "#" },
  { title: "Data and Cloud Solutions", path: "#" },
  { title: "Custom Tech Solutions", path: "#" }
];

const SolutionsPage = () => {
  return (
    <section className="bg-white pt-15">
      <div
        className="relative h-64 md:h-80 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${image151})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Solutions Designed to Solve Your Challenges
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white">
            Our tailored services deliver transformative results. Explore the solutions that align with your business needs.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Explore Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-bold">{service.title}</h3>
              <Link to={service.path} className="text-red-600 font-semibold mt-2 inline-block">
                More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPage;
