import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex gap-10 justify-between py-10">
          <div className="w-1/2">
            <h1 className=" text-[#202020] text-5xl">About Us </h1>
            <div className="w-40 flex flex-col gap-2 items-end">
              <div className="w-40 h-2 bg-[#f1b24a] mt-5"></div>
              <div className="w-20 h-1 bg-[#202020]"></div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/homepage-img/about-7.jpg"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
