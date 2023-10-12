import AboutUs from "@/components/homePage/about-us/AboutUs";
import Hero from "@/components/homePage/hero/Hero";
import Specialization from "@/components/homePage/specialization/Specialization";
import React from "react";
import Parallax1 from "@/components/homePage/parallax/Parallax1";

const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#ffffff]  pb-80 ">
      <Hero />
      <Specialization />
      <AboutUs />
      <Parallax1 />
    </div>
  );
};

export default Home;
