import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-red-600 text-white text-center py-12">
      <h2 className="text-3xl font-bold">Let's Shape the Future Together.</h2>
      <p className="mt-2 text-lg">
        Get in touch today to start your journey toward innovation, efficiency, and growth.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-6 py-3 bg-white text-red-600 font-semibold rounded-md hover:bg-gray-200">
          Schedule a Call
        </button>
        <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-gray-200 hover:text-red-600">
          Request a Proposal
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
