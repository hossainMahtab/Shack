import AboutUs from "@/components/homePage/about-us/AboutUs";
import Hero from "@/components/homePage/hero/Hero";
import Specialization from "@/components/homePage/specialization/Specialization";
import React from "react";
import Parallax1 from "@/components/homePage/parallax/Parallax1";
import MenuAccordion from "@/components/homePage/menuAccordion/MenuAccordion";
import Opening from "@/components/homePage/opening/Opening";
import PrivateSection from "@/components/homePage/privateSection/PrivateSection";
import LatestNews from "@/components/homePage/latestNews/LatestNews";
import Testimonials from "@/components/homePage/testimonials/Testimonials";
import ContactUs from "@/components/homePage/contact-us/ContactUs";
import HomeGallery from "@/components/homePage/homeGallery/HomeGallery";
const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#ffffff]  pb-[300px] -mt-[132px] ">
      <Hero />
      <Specialization />
      <AboutUs />
      {/* <Parallax1 /> */}
      <Opening />
      <MenuAccordion />
      <PrivateSection />
      <HomeGallery />
      <LatestNews />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
