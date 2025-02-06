import React from "react";
import BusinessStats from "./BusinessStats";
import CallToAction from "./CallToAction";
import BusinessChallenge from "./BusinessChallenge";
import GrowthStats from "./GrowthStats";
import WhyPartner from "./WhyPartner";
import Solutions from "./Solutions";
import CaseStudies from "./CaseStudies";
import BusToCall from "./BusToCall";
import Services from "./Services";

const BusinessLandingPage = () => {
  return (
    <div className="bg-gray-50">
      <Services />
      <BusinessStats />
      <BusToCall/>
      <BusinessChallenge />
      <GrowthStats />
      <WhyPartner />
      <Solutions />
      <CaseStudies />
      <CallToAction />  
    </div>
  );
};

export default BusinessLandingPage;
    