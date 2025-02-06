import React from "react";
import image321 from "./../assets/images/image321.jpeg";

const BusinessChallenge = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black">
            What’s Your Business Challenge?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Answer two questions and put our thinking to work on your challenges.
          </p>

          {/* Buttons Section */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            {["Technology", "E-Commerce", "Healthcare", "Financial Services", "Marketing", "Others"].map((industry) => (
              <button key={industry} className="px-4 py-2 border rounded-md bg-white hover:bg-gray-200 transition">
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2">
          <img 
            src={image321} 
            alt="Team brainstorming" 
            className="w-full h-auto md:h-full rounded-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default BusinessChallenge;
