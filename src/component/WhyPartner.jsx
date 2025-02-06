import React from "react";
import image5 from "./../assets/images/image5.jpeg";

const WhyPartner = () => {
  return (
    <section className="py-12 px-4 bg-white max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-3xl font-bold text-black text-center md:text-left">Why Partner with Us?</h2>
          <p className="text-lg text-gray-600 mt-4 text-center md:text-left">
            From industry-leading expertise to innovative technologies, here’s why Growth Grid is the right choice for your business.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Data-Driven Solutions", desc: "Customized strategies powered by AI, automation, and predictive analytics." },
              { title: "Proven Track Record", desc: "Delivered measurable success across industries." },
              { title: "Scalable Technologies", desc: "Cloud-first, secure, and future-ready systems for long-term growth." },
              { title: "End-to-End Support", desc: "From ideation to execution and optimization, we’re with you every step of the way." }
            ].map((item) => (
              <div key={item.title} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                <h3 className="text-xl font-bold text-red-600">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img src={image5} alt="Why Partner" className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
