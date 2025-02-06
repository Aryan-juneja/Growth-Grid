import React from "react";
import image123 from "./../assets/images/image123.jpeg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/solutions");
  };

  return (
    <section
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image123})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 text-left max-w-3xl px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Redefining Business Growth with <span className="text-yellow-400">AI</span>, Technology, and <br /> Data-Driven Solutions.
        </h1>
        <p className="mt-4 text-lg text-white">
          Growth Grid helps businesses thrive in a digital-first world through innovative strategies, seamless automation, and measurable results.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button 
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600"
            onClick={handleExploreClick} 
          >
            Explore Our Solutions
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
