import React from "react";
import image4 from "./../assets/images/image4.jpeg";

const DeliverResults = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold">How We Deliver Results</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-6">
        {/** Benefits Section */}
        {[
          {
            title: "Increased Engagement",
            description:
              "AI-backed scheduling ensures posts go live when your audience is most active, boosting likes, shares, and comments.",
          },
          {
            title: "Higher Conversion Rates",
            description:
              "Dynamic, interactive content like Instagram reels and Twitter polls drives 3x more click-through rates than static posts.",
          },
          {
            title: "Revenue Growth",
            description:
              "Strategic campaigns targeting high-intent audiences improve lead generation by 40%.",
          },
        ].map((item, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold text-red-500">
              {index + 1}. {item.title}
            </h3>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 my-6">
        {/** Case Study Section */}
        <img
          src={image4}
          alt="Fashion Brand"
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold">
            From Zero to Viral – Boosting Revenue for a Fashion Brand
          </h2>
          <p className="text-red-500 font-bold mt-2">Problem:</p>
          <p className="text-gray-700">
            A mid-sized retailer faced stagnant engagement and declining social-driven sales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Our Solution</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Conducted an audit revealing inconsistent branding and ineffective campaigns.</li>
                <li>Created a 3-month content calendar focusing on visually striking reels, influencer partnerships, and giveaways.</li>
                <li>Used Sprout Social to analyze engagement patterns and fine-tune posts.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold">Results</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Engagement rate increased from 2.5% to 9% in 6 months.</li>
                <li>35% boost in online sales, contributing to 20% of overall revenue.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/** Related Offerings Section */}
      <h2 className="text-2xl font-bold mt-8">Related Offerings</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {[
          "Paid Advertising",
          "Content Creation",
          "Website and App Development",
        ].map((service, index) => (
          <div key={index} className="p-4 border rounded-lg text-center">
            <h3 className="font-bold">{service}</h3>
            <p className="text-red-500 mt-2 cursor-pointer">More &gt;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverResults;
