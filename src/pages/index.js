import AboutUs from "@/components/homePage/about-us/AboutUs";
import Hero from "@/components/homePage/hero/Hero";
import Specialization from "@/components/homePage/specialization/Specialization";
import React from "react";
import Parallax1 from "@/components/homePage/parallax/Parallax1";
import MenuAccordion from "@/components/homePage/menuAccordion/MenuAccordion";
import Opening from "@/components/homePage/opening/Opening";
import PrivateSection from "@/components/homePage/privateSection/PrivateSection";
import LatestNews from "@/components/homePage/latestNews/LatestNews";
const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#ffffff]  pb-80 ">
      <Hero />
      <Specialization />
      <AboutUs />
      <Parallax1 />
      <MenuAccordion />
      <Opening />
      <PrivateSection />
      <LatestNews />
    </div>
  );
};

export default Home;
