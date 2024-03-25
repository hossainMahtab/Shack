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
      {/* <div className="hidden">
        <div
          className={` ${
            pathname == "/"
              ? " grid-cols-1 lg:grid-cols-3"
              : "grid-cols-1 lg:grid-cols-2"
          } w-full grid gap-x-6 lg:gap-x-10 xl:gap-x-14 gap-y-4 lg:gap-y-7 xl:gap-y-10 items-center  `}
        >
          {pathname == "/"
            ? demoNews.slice(0, 3).map((news) => (
                <div
                  key={news.id}
                  className="w-full h-auto overflow-hidden flex flex-col py-2 lg:py-4 xl:py-6 gap-2 lg:gap-3 xl:gap-4 items-center justify-center rounded-[10px] shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl px-2 lg:px-3 xl:px-4 font-semibold text-[#202020] max-w-max">
                    {news.title.slice(0, 60)}
                    {news.title.length > 60 && "..."}
                  </h1>
                  <div className="w-full px-2 lg:px-3 xl:px-4 flex justify-between items-center">
                    <div className="w-full lg:w-1/2  flex items-center gap-1 lg:gap-2">
                      <img
                        src={news.profilePic}
                        alt=""
                        className="w-8 h-8  lg:w-10 lg:h-10 rounded-full"
                      />
                      <p className="text-[#202020] text-base lg:text-lg xl:text-xl">
                        {news.profileName}
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end">
                      <p className="text-[#202020] text-base lg:text-lg xl:text-xl">
                        {news.date}
                      </p>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <p className="text-[#e4ae62] bg-[#f6feff30] backdrop-blur-sm z-20 max-w-max p-1 lg:p-2 rounded-md capitalize absolute top-1.5 lg:top-2 xl:top-2.5 right-2 lg:right-3 xl:right-4 text-base lg:text-lg xl:text-xl text-right w-full">
                      {news.type}
                    </p>
                    <div className=" absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
                    <img
                      src={news.image}
                      alt=""
                      className="w-full h-[150px] lg:h-[200px] xl:h-[250px] object-cover"
                    />
                  </div>
                  <div className="w-full  flex flex-col gap-1.5  items-center justify-between pb-2">
                    <h3 className="text-base lg:text-lg xl:text-xl px-2 lg:px-3 xl:px-4 text-[#202020] break-words w-full ">
                      {news.description && news.description.slice(0, 90)}
                      {news.description &&
                        news.description.length > 90 &&
                        "..."}
                    </h3>
                    <div
                      onClick={handleBlogId(news.id)}
                      className="xl:mt-4 lg:mt-3 mt-2"
                    >
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
                  className="w-full h-auto overflow-hidden flex flex-col py-2 lg:py-4 xl:py-6 gap-2 lg:gap-3 xl:gap-4 items-center justify-center rounded-[10px] shadow-xl  hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl px-2 lg:px-3 xl:px-4 font-semibold text-[#202020] max-w-max">
                    {news.title.slice(0, 80)}
                    {news.title.length > 80 && "..."}
                  </h1>
                  <div className="w-full px-2 lg:px-3 xl:px-4 flex justify-between items-center">
                    <div className="w-full lg:w-1/2  flex items-center gap-1 lg:gap-2">
                      <img
                        src={news.profilePic}
                        alt=""
                        className="w-8 h-8  lg:w-10 lg:h-10 rounded-full"
                      />
                      <p className="text-[#202020] text-base lg:text-lg xl:text-xl">
                        {news.profileName}
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end">
                      <p className="text-[#202020] text-base lg:text-lg xl:text-xl">
                        {news.date}
                      </p>
                    </div>
                  </div>
                  <div className="w-full relative">
                    <p className="text-[#e4ae62] bg-[#f6feff30] backdrop-blur-sm z-20 max-w-max p-1 lg:p-2 rounded-md capitalize absolute top-1.5 lg:top-2 xl:top-2.5 right-2 lg:right-3 xl:right-4 text-base lg:text-lg xl:text-xl text-right w-full">
                      {news.type}
                    </p>
                    <div className=" absolute top-0 left-0 w-full h-full z-10 bg-black/40"></div>
                    <img
                      src={news.image}
                      alt=""
                      className="w-full h-[150px] lg:h-[200px] xl:h-[250px] object-cover"
                    />
                  </div>
                  <div className="w-full  flex flex-col gap-1.5  items-center justify-between pb-2">
                    <h3 className="text-base lg:text-lg xl:text-xl h-20 lg:h-24 xl:h-28 px-2 lg:px-3 xl:px-4 text-[#202020] text-left w-full">
                      {news.description.slice(0, 110)}
                      {news.description.length > 110 && "..."}
                    </h3>
                    <div
                      onClick={handleBlogId(news.id)}
                      className="xl:mt-4 lg:mt-3 mt-2"
                    >
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
      </div> */}
      <div className="">
        <div
          className={` ${
            pathname == "/"
              ? " grid-cols-1 lg:grid-cols-3"
              : "grid-cols-1 lg:grid-cols-2"
          } w-full grid gap-x-6 lg:gap-x-10 xl:gap-x-14 gap-y-4 lg:gap-y-7 xl:gap-y-10 items-center  `}
        >
          {pathname == "/"
            ? demoNews.slice(0, 3).map((news) => (
                <div
                  key={news.id}
                  className="overflow-hidden bg-white rounded-[10px] shadow-md hover:shadow-xl hover:scale-[1.01]"
                  // onClick={handleBlogId(news.id)}
                >
                  <div className="p-5 ">
                    <div className="relative">
                      <div className="block aspect-w-4 aspect-h-3 ">
                        <img
                          className="object-cover w-full h-[240px]"
                          src={news.image}
                          alt=""
                        />
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                          {" "}
                          {news.type}
                        </span>
                      </div>
                    </div>
                    <span className="flex justify-between mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {" "}
                      {/* March 21, 2020{" "} */}
                      {news.date}
                      <div className="flex items-center gap-1 lg:gap-2">
                        <img
                          src={news.profilePic}
                          alt=""
                          className="w-4 h-4 object-cover  lg:w-6 lg:h-6 rounded-full"
                        />
                        <p className="">{news.profileName}</p>
                      </div>
                    </span>
                    <p className="mt-5 text-2xl font-semibold text-black">
                      {/* How to build coffee inside your home in 5 minutes.{" "} */}
                      {news.title}
                    </p>
                    <p className="mt-4 text-base text-gray-600">
                      {/* Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. */}
                      {/* {news.description} */}
                      {news.description && news.description.slice(0, 90)}
                      {news.description &&
                        news.description.length > 90 &&
                        "..."}
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
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            : demoNews.map((news) => (
                <div
                  key={news.id}
                  className="overflow-hidden bg-white rounded-[10px] shadow-md hover:shadow-xl hover:scale-[1.01] hover:transition-all duration-300 ease-in-out"
                  // onClick={handleBlogId(news.id)}
                >
                  <div className="p-5 ">
                    <div className="relative">
                      <div className="block aspect-w-4 aspect-h-3 ">
                        <img
                          className="object-cover w-full h-[240px]"
                          src={news.image}
                          alt=""
                        />
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                          {" "}
                          {news.type}
                        </span>
                      </div>
                    </div>
                    <span className="flex justify-between mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                      {" "}
                      {/* March 21, 2020{" "} */}
                      {news.date}
                      <div className="flex items-center gap-1 lg:gap-2">
                        <img
                          src={news.profilePic}
                          alt=""
                          className="w-4 h-4 object-cover  lg:w-6 lg:h-6 rounded-full"
                        />
                        <p className="">{news.profileName}</p>
                      </div>
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                      <p className="text-black">
                        {" "}
                        {/* How to build coffee inside your home in 5 minutes.{" "} */}
                        {news.title}
                      </p>
                    </p>
                    <p className="mt-4 text-base text-gray-600">
                      {/* Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. */}
                      {/* {news.description} */}
                      {news.description && news.description.slice(0, 90)}
                      {news.description &&
                        news.description.length > 90 &&
                        "..."}
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
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest from blog
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Lifestyle{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  March 21, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    How to build coffee inside your home in 5 minutes.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Marketing{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  April 04, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    Ho7 Tips to run your remote team faster and better.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Productivity{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  May 12, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black">
                    {" "}
                    5 Productivity tips to write faster at morning.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default LatestNewsCard;
