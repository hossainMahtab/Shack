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
        <div className="w-full flex flex-col xl:gap-8 lg:gap-6 gap-4 ">
          <div className="w-full flex flex-col-reverse lg:flex-row xl:gap-8 lg:gap-6 gap-4 pt-12 lg:pt-16 xl:pt-20">
            <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-4 ">
              <div className="w-full flex flex-col items-center">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="Reserve a table"
                  title="Latest News"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSizeXl="text-5xl"
                  titleSizeLg="text-4xl"
                  titleSize="text-3xl"
                />
              </div>
              <div className="w-full py-4 lg:py-7 xl:py-10">
                <LatestNewsCard />
              </div>
            </div>
            {/* filter */}
            <div className="flex-grow h-full flex flex-col  items-center rounded-[10px] lg:mt-[126px] pt-2 lg:pt-4 xl:pt-6 pb-4 lg:pb-7 xl:pb-10 gap-2 lg:gap-3 xl:gap-4  shadow-lg">
              <div className="max-w-max flex flex-col items-center">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="Reserve a table"
                  title="Categories"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSizeXl="text-4xl"
                  titleSizeLg="text-3xl"
                  titleSize="text-2xl"
                />
              </div>
              <div className="w-full  flex flex-row lg:flex-col items-center justify-center mt-2 lg:mt-3 xl:mt-4 gap-2 lg:gap-3 xl:gap-4">
                <div className=" grid grid-cols-3 lg:grid-cols-1 w-full  gap-2 lg:gap-3 xl:gap-4">
                  {demoTypes.map((type) => (
                    <div
                      key={type.id}
                      className=" w-full text-center  border-b-[0.5px] border-solid border-[#d4d8d9] hover:border-[#e4ae62] text-[#202020] hover:text-[#e4ae62]   transition-all duration-300 ease-out  cursor-pointer"
                    >
                      <h1 className="xl:text-2xl lg:text-xl text-lg p-2 font-semibold  uppercase scale-[1] hover:scale-[1.05]  transition-all duration-300 ease-out  cursor-pointer">
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
