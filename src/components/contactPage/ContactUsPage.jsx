import React from "react";
import ContactUsPageSlider from "./ContactUsPageSlider";
import ContactUsContent from "./ContactUsContent";

const ContactUsPage = () => {
  return (
    <div className="w-full flex flex-col">
      <ContactUsPageSlider />
      <ContactUsContent />
    </div>
  );
};

export default ContactUsPage;
