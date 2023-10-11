// import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import AboutUs from "@/components/homePage/about-us/AboutUs";
import Hero from "@/components/homePage/hero/Hero";
import Parallax from "@/components/homePage/parallax/Parallax";
import React from "react";

const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#f5f5f7] pb-80 ">
      <div className="">
        <Hero />
      </div>
      <AboutUs />
      <Parallax />
    </div>
  );
};

// Home.getLayout = page => <PrimaryLayout>{page}</PrimaryLayout>
export default Home;
