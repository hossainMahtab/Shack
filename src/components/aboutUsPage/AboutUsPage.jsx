import React from "react";
import AboutUsSlider from "./AboutUsSlider";
import AboutUsPageContent from "./AboutUsPageContent";

const AboutUsPage = () => {
  return (
    <div className="w-full flex flex-col">
      <AboutUsSlider />
      <AboutUsPageContent />
    </div>
  );
};

export default AboutUsPage;
