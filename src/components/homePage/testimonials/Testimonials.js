import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Testimonials = () => {
  return (
    <div className="flex relative items-center justify-center bg-[url(/homepage-img/testimonial-cover.jpeg)] bg-fixed bg-cover  max-w-full h-[1020px] md:h-[900px] lg:h-[760px] xl:h-[540px]">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute w-full">
        <div className="w-full flex flex-col items-center justify-center">
          <CommonContentHeader
            textColor="text-[#FFFFFF]"
            subtitle="What Client Say"
            title="Testimonials"
            lineBg="bg-[#FFFFFF]"
            subtitleSizeXl="text-2xl"
            subtitleSizeLg="text-xl"
            subtitleSize="text-lg"
            titleSizeXl="text-6xl"
            titleSizeLg="text-5xl"
            titleSize="text-4xl"
          />
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 px-12 lg:px-16 xl:px-20 mt-4 lg:mt-7 xl:mt-10 ">
            {/* 1 */}
            <div className="w-full bg-[#75797a50] rounded-[10px] xl:p-6 lg:p-4 p-2 md flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-base lg:text-lg xl:text-xl font-bold capitalize lg:mb-2 mb-1">
                &quot;Ferri altera eripuit ne nam. Duo at tibique
                conclusionemque, nam modo ancillae tacimates et, cu vim omnes
                phaedrum conclusionemque. Ex tempor eligendi corrumpit vim, sea
                ei tacimates reformidans. Congue corpora vis ad.&quot;
              </p>
              <h2 className="text-[#FFFFFF] text-lg lg:text-xl xl:text-2xl font-bold capitalize lg:mb-2 mb-1">
                - John Doe -
              </h2>
              <h3 className="text-yellow-400 flex gap-1 lg:gap-2 text-xl lg:text-2xl xl:text-3xl font-bold ">
                {" "}
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </h3>{" "}
            </div>
            {/* 2 */}
            <div className="w-full bg-[#75797a50] rounded-[10px] xl:p-6 lg:p-4 p-2 flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-base lg:text-lg xl:text-xl font-bold capitalize lg:mb-2 mb-1">
                &quot;Ferri altera eripuit ne nam. Duo at tibique
                conclusionemque, nam modo ancillae tacimates et, cu vim omnes
                phaedrum conclusionemque. Ex tempor eligendi corrumpit vim, sea
                ei tacimates reformidans. Congue corpora vis ad.&quot;
              </p>
              <h2 className="text-[#FFFFFF] text-lg lg:text-xl xl:text-2xl font-bold capitalize lg:mb-2 mb-1">
                - John Doe -
              </h2>
              <h3 className="text-yellow-400 flex gap-1 lg:gap-2 text-xl lg:text-2xl xl:text-3xl font-bold ">
                {" "}
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </h3>{" "}
            </div>
            {/* 3 */}
            <div className="w-full bg-[#75797a50] rounded-[10px] xl:p-6 lg:p-4 p-2 flex flex-col items-center justify-center">
              <p className="text-[#FFFFFF] text-center text-base lg:text-lg xl:text-xl font-bold capitalize lg:mb-2 mb-1">
                &quot;Ferri altera eripuit ne nam. Duo at tibique
                conclusionemque, nam modo ancillae tacimates et, cu vim omnes
                phaedrum conclusionemque. Ex tempor eligendi corrumpit vim, sea
                ei tacimates reformidans. Congue corpora vis ad.&quot;
              </p>
              <h2 className="text-[#FFFFFF] text-lg lg:text-xl xl:text-2xl font-bold capitalize lg:mb-2 mb-1">
                - John Doe -
              </h2>
              <h3 className="text-yellow-400 flex gap-1 lg:gap-2 text-xl lg:text-2xl xl:text-3xl font-bold ">
                {" "}
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
