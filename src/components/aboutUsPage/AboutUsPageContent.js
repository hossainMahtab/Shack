import React from "react";
import ContactUs from "../homePage/contact-us/ContactUs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const AboutUsPageContent = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:gap-8 lg:gap-6 gap-4 ">
          {/* story */}
          <div className="w-full flex flex-col xl:gap-20 lg:gap-16 gap-12  pageContainerPaddingY">
            <div className="w-full flex flex-col  items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="About"
                title="Our Story"
                lineBg="bg-[#202020]"
                subtitleSizeXl="text-2xl"
                subtitleSizeLg="text-xl"
                subtitleSize="text-lg"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse xl:gap-20 lg:gap-16 gap-12 justify-between  ">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-2 lg:gap-3 xl:gap-4">
                <div className=" w-full flex flex-col lg:items-start items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <div className=" hidden max-w-max lg:flex flex-col gap-1 lg:gap-2 items-end">
                    <h1 className=" max-w-max py-2 xl:border-b-8 lg:border-b-[6px] border-b-4 border-b-[#e4ae62] font-bold text-[#202020] text-2xl lg:text-4xl xl:text-6xl">
                      Shack
                    </h1>
                    <div className="xl:w-28 lg:w-20 w-16 h-0.5 lg:h-1 bg-[#202020]"></div>
                  </div>
                  <div className="lg:hidden block">
                    <CommonContentHeader
                      textColor="text-[#202020]"
                      // subtitle="About"
                      title="Shack"
                      lineBg="bg-[#202020]"
                      // subtitleSize="text-2xl"
                      titleSizeXl="text-6xl"
                      titleSizeLg="text-4xl"
                      titleSize="text-2xl"
                    />
                  </div>
                  <h2 className="text-[#202020] text-center lg:text-start text-lg lg:text-xl xl:text-2xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus
                  </h2>
                  <h3 className="text-[#202020] text-center lg:text-start text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus accusantium tempora voluptatibus voluptate.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus accusantium tempora voluptatibus voluptate.
                  </h3>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <img
                  src="/homepage-img/about-7.jpg"
                  alt=""
                  className="w-full h-[300px] lg:h-[400px] xl:h-[500px] "
                />
              </div>
            </div>
          </div>
          {/* chef */}
          <div className="w-full flex flex-col  ">
            <div className="w-full flex flex-col items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="About"
                title="Our Chefs"
                lineBg="bg-[#202020]"
                subtitleSizeXl="text-2xl"
                subtitleSizeLg="text-xl"
                subtitleSize="text-lg"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row xl:gap-10 md:gap-8 gap-6 justify-between  pageContainerPaddingY">
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                <div className=" w-full flex flex-col lg:items-start items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
                  <div className=" hidden max-w-max lg:flex flex-col gap-1 lg:gap-2 items-end">
                    <h1 className=" max-w-max py-2 xl:border-b-8 lg:border-b-[6px] border-b-4 border-b-[#e4ae62] font-bold text-[#202020] text-2xl lg:text-4xl xl:text-6xl">
                      Our Artists
                    </h1>
                    <div className="xl:w-28 lg:w-20 w-16 h-0.5 lg:h-1 bg-[#202020]"></div>
                  </div>
                  <div className="lg:hidden block">
                    <CommonContentHeader
                      textColor="text-[#202020]"
                      // subtitle="About"
                      title="Our Artists"
                      lineBg="bg-[#202020]"
                      // subtitleSize="text-2xl"
                      titleSizeXl="text-6xl"
                      titleSizeLg="text-4xl"
                      titleSize="text-2xl"
                    />
                  </div>
                  <h2 className="text-[#202020] text-center lg:text-start text-lg lg:text-xl xl:text-2xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus
                  </h2>
                  <h3 className="text-[#202020] text-center lg:text-start text-base lg:text-lg xl:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus accusantium tempora voluptatibus voluptate.
                    Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                    doloribus accusantium tempora voluptatibus voluptate.
                  </h3>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex gap-2 lg:gap-3 xl:gap-4 items-center justify-center lg:justify-end overflow-hidden ">
                <img
                  src="/aboutUsPage/chef.jpeg"
                  alt=""
                  className="w-full h-[260px] lg:h-[320px] xl:h-[400px] object-cover "
                />
                <img
                  src="/aboutUsPage/chef2.jpeg"
                  alt=""
                  className="w-full h-[300px] lg:h-[400px] xl:h-[500px] object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="w-full flex flex-col xl:gap-20 lg:gap-16 gap-12  ">
        <div className="w-full flex flex-col  items-center text-center">
          <CommonContentHeader
            textColor="text-[#202020]"
            subtitle="About"
            title="testimonials"
            lineBg="bg-[#202020]"
            subtitleSizeXl="text-2xl"
            subtitleSizeLg="text-xl"
            subtitleSize="text-lg"
            titleSizeXl="text-6xl"
            titleSizeLg="text-4xl"
            titleSize="text-2xl"
          />
        </div>

        <div className="flex relative items-center justify-center bg-[url(/homepage-img/testimonial-cover.jpeg)] bg-fixed bg-cover  max-w-full h-[1020px] md:h-[900px] lg:h-[760px] xl:h-[540px] ">
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

export default AboutUsPageContent;
