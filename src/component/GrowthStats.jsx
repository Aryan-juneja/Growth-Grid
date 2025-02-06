import React from "react";

const GrowthStats = () => {
  return (
    <section className="text-center py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        We Are Growth Grid
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        Empowering businesses through technology, AI, and strategic insights, Growth Grid enables organizations to scale, adapt, and lead in their industries.
      </p>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">100+</p>
          <p className="text-gray-700">Businesses empowered globally.</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">40%</p>
          <p className="text-gray-700">Average operational efficiency achieved for clients.</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-red-600">$2M+</p>
          <p className="text-gray-700">Saved annually across automated workflows.</p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        <div>
          <h3 className="text-xl font-bold text-red-600">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            To revolutionize businesses by delivering data-driven solutions powered by AI and automation.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            A future where businesses harness the power of technology to innovate and thrive in a competitive landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;
