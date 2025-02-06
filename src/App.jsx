import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./component/Hero";
import BusinessLandingPage from "./component/BusinessLandingPage";
import Footer from "./footer/Footer";
import SolutionsPage from "./component/SolutionsPage";
import SocialMediaPage from "./component/SocialMediaPage";

const App = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/solutions");
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero handleExploreClick={handleExploreClick} />
              <BusinessLandingPage />
            </>
          }
        />

        <Route path="/solutions" element={<SolutionsPage />} />

        <Route
          path="/social-media-management"
          element={<SocialMediaPage />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
