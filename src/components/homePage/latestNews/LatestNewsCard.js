import React, { use } from "react";
import { demoNews } from "./DemoNews";
import CommonButton from "@/components/shared/button/CommonButton";
import { useRouter } from "next/router";

const LatestNewsCard = () => {
  const { pathname } = useRouter();
  const router = useRouter();

  const handleBlogId = (id) => () => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <div
        className={` ${
          pathname == "/"
            ? " grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        } w-full grid gap-x-12 md:gap-x-16 xl:gap-x-20 gap-y-4 md:gap-y-7 xl:gap-y-10 items-center `}
      >
        {pathname == "/"
          ? demoNews.slice(0, 3).map((news) => (
              <div
                key={news.id}
                className="w-full h-auto overflow-hidden flex flex-col py-2 md:py-4 xl:py-6 gap-2 md:gap-3 xl:gap-4 items-center justify-center rounded-[10px] shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
              >
                <h1 className="text-xl md:text-2xl xl:text-3xl px-2 md:px-3 xl:px-4 font-semibold text-[#202020] max-w-max">
                  {news.title.slice(0, 80)}
                  {news.title.length > 80 && "..."}
                </h1>
                <div className="w-full px-2 md:px-3 xl:px-4 flex justify-between items-center">
                  <div className="w-full md:w-1/2  flex items-center gap-1 md:gap-2">
                    <img
                      src={news.profilePic}
                      alt=""
                      className="w-8 h-8  md:w-10 md:h-10 rounded-full"
                    />
                    <p className="text-[#202020] text-base md:text-lg xl:text-xl">
                      {news.profileName}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-end">
                    <p className="text-[#202020] text-base md:text-lg xl:text-xl">
                      {news.date}
                    </p>
                  </div>
                </div>
                <div className="w-full relative">
                  <p className="text-[#e4ae62] bg-[#f6feff30] backdrop-blur-sm z-20 max-w-max p-1 md:p-2 rounded-md capitalize absolute top-1.5 md:top-2 xl:top-2.5 right-2 md:right-3 xl:right-4 text-base md:text-lg xl:text-xl text-right w-full">
                    {news.type}
                  </p>
                  <div className=" absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
                  <img
                    src={news.image}
                    alt=""
                    className="w-full h-[150px] md:h-[200px] xl:h-[250px] object-cover"
                  />
                </div>
                <div className="w-full  flex flex-col gap-1  items-center justify-between">
                  <h3 className="text-base md:text-lg xl:text-xl h-20 md:h-24 xl:h-28 px-2 md:px-3 xl:px-4 text-[#202020] text-left w-full">
                    {news.description.slice(0, 110)}
                    {news.description.length > 110 && "..."}
                  </h3>
                  <div onClick={handleBlogId(news.id)}>
                    <CommonButton
                      btnText="Read More"
                      borderColor="border-[#202020]"
                      textColor="text-[#202020]"
                      hoverBorderColor="hover:border-[#e4ae62]"
                      hoverTextColor="hover:text-[#FFFFFF]"
                    />
                  </div>
                </div>
              </div>
            ))
          : demoNews.map((news) => (
              <div
                key={news.id}
                className="w-full h-auto overflow-hidden flex flex-col py-2 md:py-4 xl:py-6 gap-2 md:gap-3 xl:gap-4 items-center justify-center rounded-[10px] shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
              >
                <h1 className="text-xl md:text-2xl xl:text-3xl px-2 md:px-3 xl:px-4 font-semibold text-[#202020] max-w-max">
                  {news.title.slice(0, 80)}
                  {news.title.length > 80 && "..."}
                </h1>
                <div className="w-full px-2 md:px-3 xl:px-4 flex justify-between items-center">
                  <div className="w-full md:w-1/2  flex items-center gap-1 md:gap-2">
                    <img
                      src={news.profilePic}
                      alt=""
                      className="w-8 h-8  md:w-10 md:h-10 rounded-full"
                    />
                    <p className="text-[#202020] text-base md:text-lg xl:text-xl">
                      {news.profileName}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-end">
                    <p className="text-[#202020] text-base md:text-lg xl:text-xl">
                      {news.date}
                    </p>
                  </div>
                </div>
                <div className="w-full relative">
                  <p className="text-[#e4ae62] bg-[#f6feff30] backdrop-blur-sm z-20 max-w-max p-1 md:p-2 rounded-md capitalize absolute top-1.5 md:top-2 xl:top-2.5 right-2 md:right-3 xl:right-4 text-base md:text-lg xl:text-xl text-right w-full">
                    {news.type}
                  </p>
                  <div className=" absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
                  <img
                    src={news.image}
                    alt=""
                    className="w-full h-[150px] md:h-[200px] xl:h-[250px] object-cover"
                  />
                </div>
                <div className="w-full  flex flex-col gap-1  items-center justify-between">
                  <h3 className="text-base md:text-lg xl:text-xl h-20 md:h-24 xl:h-28 px-2 md:px-3 xl:px-4 text-[#202020] text-left w-full">
                    {news.description.slice(0, 110)}
                    {news.description.length > 110 && "..."}
                  </h3>
                  <div onClick={handleBlogId(news.id)}>
                    <CommonButton
                      btnText="Read More"
                      borderColor="border-[#202020]"
                      textColor="text-[#202020]"
                      hoverBorderColor="hover:border-[#e4ae62]"
                      hoverTextColor="hover:text-[#FFFFFF]"
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default LatestNewsCard;
