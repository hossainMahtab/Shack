import React from "react";
import LatestNewsCard from "../homePage/latestNews/LatestNewsCard";

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
          <div className="w-full flex flex-row  pt-20">
            <div className="w-[68%] flex flex-col items-center justify-center gap-4 px-10">
              <div className="w-full flex flex-col items-center">
                <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
                  LATEST NEWS
                </h1>
                <div className="w-[420px] h-0.5 bg-[#202020] mb-1"></div>
                <div className="w-[420px] h-2 bg-[#202020]"></div>
              </div>
              <div className="w-full py-10">
                <LatestNewsCard />
              </div>
            </div>
            {/* filter */}
            <div className="flex-grow h-auto flex flex-col  items-center  gap-4 px-10">
              <div className="max-w-max flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-[#202020] uppercase mb-2">
                  Categories
                </h1>
                <div className="w-full h-0.5 bg-[#202020] mb-1"></div>
                <div className="w-full h-2 bg-[#202020] mb-4"></div>
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
