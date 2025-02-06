import React from "react";
import image55 from "./../assets/images/image55.jpeg";

const BusinessStats = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
        
        <div className="w-full md:w-1/2">
          <img 
            src={image55} 
            alt="Team brainstorming" 
            className="w-full h-auto md:h-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight text-center md:text-left">
            The Numbers That Drive the <br />
            <span className="text-black">Future of Business.</span>
          </h2>
          <p className="text-gray-600 mt-4 text-center md:text-left">
            From efficiency to innovation, discover why businesses that harness AI, automation, 
            and data analytics are thriving in a competitive world.
          </p>

          <div className="mt-6 bg-gray-100 p-6 rounded-lg text-center md:text-left">
            <p className="text-red-600 text-2xl md:text-3xl font-bold">
              1. <span className="text-black">94% of first impressions are based on website design.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
            <div className="w-full md:w-1/2 p-6 border rounded-lg bg-white shadow-md">
              <h3 className="text-lg font-semibold text-center md:text-left">Why It Matters</h3>
              <p className="text-gray-600 mt-2 text-center md:text-left">
                A website is your digital storefront, and its design directly impacts how 
                customers perceive your credibility and professionalism. Poor design drives 
                visitors away, while modern, responsive designs can increase retention by 50%.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-6 border rounded-lg bg-white shadow-md">
              <h3 className="text-lg font-semibold text-center md:text-left">How We Help</h3>
              <p className="text-gray-600 mt-2 text-center md:text-left">
                Growth Grid specializes in AI-enhanced website and app development, 
                ensuring your platforms leave a lasting, positive impression.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <span className="w-3 h-3 bg-red-600 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full mx-1"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
