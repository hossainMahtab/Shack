import React from "react";
import LatestNewsCard from "../homePage/latestNews/LatestNewsCard";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const BlogPageContent = () => {
  const demoTypes = [
    {
      id: 1,
      type: "Food",
    },
    {
      id: 2,
      type: "Dessert",
    },
    {
      id: 3,
      type: "Recipe",
    },
  ];

  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full flex flex-row gap-8  pt-20">
            <div className="w-[75%] flex flex-col items-center justify-center gap-4 xl:px-10 md:px-8 px-6">
              <div className="w-full flex flex-col items-center">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="Reserve a table"
                  title="Latest News"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSize="text-5xl"
                />
              </div>
              <div className="w-full py-10">
                <LatestNewsCard />
              </div>
            </div>
            {/* filter */}
            <div className="flex-grow h-full flex flex-col  items-center rounded-[10px] mt-[126px] pt-6 pb-10 gap-4 xl:px-10 md:px-8 px-6 shadow-lg">
              <div className="max-w-max flex flex-col items-center">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="Reserve a table"
                  title="Categories"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSize="text-4xl"
                />
              </div>
              <div className="w-full  flex flex-col items-center justify-center mt-4 gap-4">
                <div className=" grid grid-cols-1 w-full  gap-4">
                  {demoTypes.map((type) => (
                    <div
                      key={type.id}
                      className=" w-full text-center  border-b-[0.5px] border-solid border-[#d4d8d9] hover:border-[#e4ae62] text-[#202020] hover:text-[#e4ae62]   transition-all duration-300 ease-out  cursor-pointer"
                    >
                      <h1 className="text-2xl p-2 font-semibold  uppercase scale-[1] hover:scale-[1.05]  transition-all duration-300 ease-out  cursor-pointer">
                        {type.type}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageContent;
