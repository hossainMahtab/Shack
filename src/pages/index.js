// import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import HomePage from "@/components/homePage/HomePage";
import React from "react";

const Home = () => {
  return (
    <div className=" w-full h-full  bg-[#f5f5f7]">
      <div className=" container  mx-auto  pb-64 ">
        <div className="flex flex-col gap-32 items-center">
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
        </div>
      </div>
    </div>
  );
};

// Home.getLayout = page => <PrimaryLayout>{page}</PrimaryLayout>
export default Home;
