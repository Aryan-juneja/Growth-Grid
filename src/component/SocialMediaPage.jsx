import React from "react";
import image5454 from "./../assets/images/image5454.jpeg";
import image56 from "./../assets/images/image56.jpeg";
import image4 from "./../assets/images/image4.jpeg";

const SocialMediaPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Header with Background Image */}
      <header
        className="relative text-white py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image5454})` }}
      >
        <h1 className="text-4xl font-bold">Social Media Management: Creating Conversations that Convert</h1>
      </header>

      {/* Research and Market Insights Section */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-bold">Research and Market Insights</h2>
        <div className="flex flex-col md:flex-row mt-6">
          <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
            <p>
              In the digital age, social media drives 54% of consumers’ purchasing decisions. With over 4.5 billion social media users globally, platforms like Instagram, LinkedIn, and Twitter have become crucial for brand visibility and engagement. However, inconsistent branding and lack of strategy often result in lost opportunities. Research reveals that businesses with a strong social media strategy witness a 24% higher revenue growth compared to competitors.
            </p>
          </div>
          <div className="md:w-1/3 border p-6 bg-gray-100 ml-0 md:ml-6">
            <h3 className="font-bold text-red-600 text-xl">Key Challenges</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 leading-relaxed">
              <li>Brands struggle to create content that resonates with diverse audiences.</li>
              <li>Engagement rates drop due to over-reliance on generic, non-interactive posts.</li>
              <li>Lack of data-backed strategies leads to ineffective campaigns.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-bold">What to Expect</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-6">
          <div>
            <h3 className="font-bold text-red-600 text-xl">1. Discovery Phase</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 leading-relaxed">
              <li>Comprehensive audit of existing social media channels</li>
              <li>Competitor benchmarking to identify strengths and gaps in your current strategy.</li>
              <li>Creation of audience personas for hyper-targeted content.</li>
            </ul>
            <h3 className="font-bold text-red-600 text-xl mt-6">2. Execution Phase</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 leading-relaxed">
              <li>Content Creation: Develop visually appealing and data-driven posts tailored to each platform.</li>
              <li>Interactive Campaigns: Launch viral content formats like Instagram challenges and influencer collaborations.</li>
              <li>Live Reporting: Track campaign performance via AI dashboards for instant insights and optimization.</li>
            </ul>
            <h3 className="font-bold text-red-600 text-xl mt-6">3. Optimization Phase</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-4 leading-relaxed">
              <li>Weekly performance reviews to identify successful strategies and refine underperforming ones.</li>
              <li>Predict future trends using AI sentiment analysis tools.</li>
            </ul>
          </div>
          <div>
            <img src={image56} alt="What to Expect" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Deliver Results Section */}
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
      </div>
    </div>
  );
};

export default SocialMediaPage;
