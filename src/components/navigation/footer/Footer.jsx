import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#202020]  ">
      <div className="container mx-auto px-10 relative">
        <div className="px-10  w-full absolute left-0 -top-36">
          <div className="flex bg-[#BC8D4B] w-full rounded-[10px] z-0 relative">
            <div className="absolute  -top-36 left-20  z-10">
              <img className="w-[180px] h-[160px]  " src="/chef.gif" alt="" />
            </div>
            <div className="w-full flex justify-between px-20 py-16">
              <div className=" flex flex-col gap-4">
                <p className="text-[#FFFFFF] text-4xl font-bold">
                  Subscribe to our newsletter
                </p>
                <p className="text-[#FFFFFF] text-xl">
                  Subscribe to our newsletter to receive news and updates
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <button className="bg-[#FFFFFF] px-10 py-4 rounded-full text-[#BC8D4B]">
                  Subscribe
                </button>
                <p className="text-[#FFFFFF] text-xl">It's a gift </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[140px] pb-16 px-10">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1">
              <div className="flex gap-2">
                <img
                  src="/renren.svg"
                  alt=""
                  className="w-7 h-7 bg-white rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#FFFFFF] text-xl text-left ">Pineapple</p>
                  <p className="text-[#FFFFFF] text-base text-left"> c 2021</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <p className="text-[#FFFFFF] text-xl text-left mb-2">
                  Pineapple
                </p>

                <p className="text-[#FFFFFF] text-lg text-left">lorem</p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>

                <p className="text-[#FFFFFF] text-xl text-left my-2">
                  Pineapple
                </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <p className="text-[#FFFFFF] text-lg text-left">lorem</p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <p className="text-[#FFFFFF] text-lg text-left">lorem</p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
                <p className="text-[#FFFFFF] text-lg text-left"> lorem </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
