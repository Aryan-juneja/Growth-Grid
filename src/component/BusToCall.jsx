import React from "react";

const BusToCall = () => {
  return (
    <section className="bg-red-600 text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">
          Curious About How These Insights Can Transform Your Business?
        </h2>
        <p className="text-lg mt-4">
          Explore the strategies and tools that position your business for success in the digital age.
        </p>

      
        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <button className="border-2 border-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-white hover:text-red-600 transition">
            Learn More About Our Approach
          </button>
          <button className="border-2 border-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-white hover:text-red-600 transition">
            Speak to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusToCall;
