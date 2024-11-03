import React, { use } from "react";
import { demoNews } from "./DemoNews";
import CommonButton from "@/components/shared/button/CommonButton";
import { useRouter } from "next/router";

const LatestNewsCard = ({ selectedCategory }) => {
  console.log("selectedCategory", selectedCategory);
  const { pathname } = useRouter();
  const router = useRouter();

  const handleBlogId = (id) => () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div
      className={` ${
        pathname == "/"
          ? " grid-cols-1 lg:grid-cols-3"
          : "grid-cols-1 lg:grid-cols-2"
      } w-full grid gap-x-6 lg:gap-x-10 xl:gap-x-14 gap-y-4 lg:gap-y-7 xl:gap-y-10 items-center  `}
    >
      {demoNews
        .filter(
          (news) =>
            pathname === "/" ||
            selectedCategory === "All" ||
            news.type === selectedCategory
        )
        .slice(0, pathname === "/" ? 3 : demoNews.length)
        .map((news) => (
          <div
            key={news.id}
            className="overflow-hidden bg-white rounded-[10px] shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all duration-300 ease-in-out"
          >
            <div className="p-5 ">
              <div className="relative">
                <div className="block rounded-md overflow-hidden ">
                  <img
                    className="object-cover w-full h-[240px]"
                    src={news.image}
                    alt=""
                  />
                </div>

                <div className="absolute top-4 left-4">
                  <p className="px-4 py-2 text-xs font-bold tracking-widest text-[#e4ae62] uppercase bg-black/20 backdrop:blur-2xl rounded-full">
                    {news.type}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {news.date}
                <div className="flex items-center gap-1 lg:gap-2">
                  <img
                    src={news.profilePic}
                    alt=""
                    className="w-4 h-4 object-cover lg:w-6 lg:h-6 rounded-full"
                  />
                  <p className="">{news.profileName}</p>
                </div>
              </div>
              <p className="mt-5 text-2xl font-semibold text-black">
                {news.title}
              </p>
              <p className="mt-4 text-base text-gray-600">
                {news.description && news.description.slice(0, 90)}
                {news.description && news.description.length > 90 && "..."}
              </p>
              <a
                onClick={handleBlogId(news.id)}
                title=""
                className="inline-flex items-center cursor-pointer justify-center pb-0.5 mt-5 text-base font-semibold text-[#202020] transition-all duration-200 "
              >
                Continue Reading
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LatestNewsCard;
