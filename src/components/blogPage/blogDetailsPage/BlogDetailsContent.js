import React from "react";
import { demoNews } from "../../homePage/latestNews/DemoNews";
import { useRouter } from "next/router";

const BlogDetailsContent = () => {
  const router = useRouter();
  const { blogId } = router.query;
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 ">
          <div className="w-full flex flex-row xl:px-10 md:px-8 px-6 pt-20">
            {demoNews.map((news) => (
              <div key={news.id}>
                {blogId == news.id && (
                  <div className="w-full flex flex-col items-center justify-center gap-4">
                    <p className="text-[#e4ae62] capitalize  text-2xl ">
                      {news.type}
                    </p>
                    <h1 className="text-6xl font-semibold text-[#202020] hover:text-[#e4ae62] transition-all duration-300 ease-out uppercase mb-2">
                      {news.title.slice(0, 80)}
                      {news.title.length > 80 && "..."}
                    </h1>
                    <div className=" w-full flex gap-2 items-center justify-center">
                      <p className="text-[#202020] text-2xl">{news.date}</p>
                      <img
                        src={news.profilePic}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="text-[#202020] text-2xl">
                        {news.profileName}
                      </p>
                    </div>
                    <img
                      src={news.image}
                      alt=""
                      className="w-full max-h-[600px] object-cover my-8 rounded-[10px]"
                    />
                    <h3 className="text-2xl  text-[#202020]">
                      {news.description}
                    </h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsContent;
