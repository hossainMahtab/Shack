import AboutUs from "@/components/homePage/about-us/AboutUs";
import Hero from "@/components/homePage/hero/Hero";
import Parallax from "@/components/homePage/parallax/Parallax";
import React from "react";

const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#ffffff]  pb-80 ">
      <div className="">
        <Hero />
      </div>
      <AboutUs />
      <Parallax />
    </div>
  );
};

export default Home;
