import React from "react";
import Image213 from "./../assets/images/Image213.jpeg"; 
import Image515 from "./../assets/images/image515.jpeg";

const CaseStudies = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-black">
        Revolutionizing Businesses with Tailored, AI-Powered Strategies.
      </h2>
      <p className="text-lg text-gray-600 mt-4 text-center max-w-3xl mx-auto">
        Our work speaks for itself. Dive into the details of how we've transformed industries, solved complex challenges, and driven measurable results for our clients.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {
            title: "Transforming Workflow Automation for a Global Tech Firm",
            desc: "An enterprise company with over 1,000 employees leveraged our AI-driven automation solutions to optimize internal workflows, increase operational efficiency, and enhance customer satisfaction.",
            img: Image213
          },
          {
            title: "Scaling E-Commerce Revenue for a Boutique Fashion Brand",
            desc: "A leading e-commerce fashion retailer maximized online sales by implementing predictive analytics and personalized customer experiences.",
            img: Image515
          }
        ].map((caseStudy) => (
          <div key={caseStudy.title} className="p-6 border rounded-lg bg-gray-50 shadow-sm">
            <img src={caseStudy.img} alt={caseStudy.title} className="w-full h-56 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-black mt-4">{caseStudy.title}</h3>
            <p className="text-gray-700 mt-2">{caseStudy.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
