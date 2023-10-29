import React from "react";
import { demoNews } from "./DemoNews";
import CommonButton from "@/components/shared/button/CommonButton";

const LatestNewsCard = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 gap-x-20 gap-y-10 items-center ">
        {demoNews.slice(0, 3).map((news) => (
          <div
            key={news.id}
            className="w-full flex flex-col py-6 gap-4 items-center justify-center rounded-[10px] shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
          >
            <h1 className="text-3xl px-4 font-semibold text-[#202020]">
              {news.title}
            </h1>
            <div className="w-full px-4 flex justify-between items-center">
              <div className="w-1/2 flex items-center gap-2">
                <img
                  src={news.profilePic}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-[#202020] text-xl">{news.profileName}</p>
              </div>
              <div className="w-1/2 flex justify-end">
                <p className="text-[#202020] text-xl">{news.date}</p>
              </div>
            </div>
            <div className="w-full relative">
              <p className="text-[#e4ae62] bg-[#f6feff30] backdrop-blur-sm z-20 max-w-max p-2 rounded-md capitalize absolute top-2.5 right-4 text-xl text-right w-full">
                {news.type}
              </p>
              <div className=" absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
              <img
                src={news.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </div>

            <h3 className="text-xl px-4 text-[#202020]">{news.description}</h3>
            <CommonButton
              btnText="Read More"
              borderColor="border-[#202020]"
              textColor="text-[#202020]"
              hoverBorderColor="hover:border-[#e4ae62]"
              hoverTextColor="hover:text-[#FFFFFF]"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestNewsCard;
