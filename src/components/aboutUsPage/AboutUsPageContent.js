import React from "react";
import ContactUs from "../homePage/contact-us/ContactUs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const AboutUsPageContent = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 ">
          {/* story */}
          <div className="w-full flex flex-col xl:px-20 md:px-16 px-12 pt-20">
            <div className="w-full flex flex-col items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="About"
                title="Our Story"
                lineBg="bg-[#202020]"
                subtitleSize="text-2xl"
                titleSize="text-6xl"
              />
            </div>
            <div className="w-full flex flex-row-reverse gap-20 justify-between  py-8 md:py-14  xl:py-20">
              <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                <div className=" w-full flex flex-col  gap-5">
                  <div className="  max-w-max flex flex-col  gap-2 items-end text-right">
                    <h1 className=" max-w-max px-4 py-2 border-b-8 border-b-[#e4ae62] font-bold text-[#202020] text-5xl mb-2">
                      Shack
                    </h1>
                    <h2 className="text-[#202020] text-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, voluptas, quod, quas quae quia
                      dolorum doloribus
                    </h2>
                    <p className="text-[#202020] text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, voluptas, quod, quas quae quia
                      dolorum doloribus accusantium tempora voluptatibus
                      voluptate. Quisquam voluptatum, voluptas, quod, quas quae
                      quia dolorum doloribus accusantium tempora voluptatibus
                      voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <img
                  src="/homepage-img/about-7.jpg"
                  alt=""
                  className="w-full h-[500px] "
                />
              </div>
            </div>
          </div>
          {/* chef */}
          <div className="w-full flex flex-col xl:px-20 md:px-16 px-12 ">
            <div className="w-full flex flex-col items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="About"
                title="Our Chefs"
                lineBg="bg-[#202020]"
                subtitleSize="text-2xl"
                titleSize="text-6xl"
              />
            </div>
            <div className="w-full flex flex-row gap-20 justify-between  py-8 md:py-14  xl:py-20">
              <div className="w-1/2 flex flex-col items-center justify-center gap-4">
                <div className=" w-full flex flex-col  gap-5">
                  <div className="  max-w-max flex flex-col  gap-2 items-start text-left">
                    <h1 className=" max-w-max px-4 py-2 border-b-8 border-b-[#e4ae62] font-bold text-[#202020] text-5xl mb-2">
                      Our Artists
                    </h1>
                    <h2 className="text-[#202020] text-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, voluptas, quod, quas quae quia
                      dolorum doloribus
                    </h2>
                    <p className="text-[#202020] text-xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam voluptatum, voluptas, quod, quas quae quia
                      dolorum doloribus accusantium tempora voluptatibus
                      voluptate. Quisquam voluptatum, voluptas, quod, quas quae
                      quia dolorum doloribus accusantium tempora voluptatibus
                      voluptate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 flex gap-4 items-center justify-end">
                <img
                  src="/aboutUsPage/chef.jpeg"
                  alt=""
                  className="w-auto h-[400px] object-contain"
                />
                <img
                  src="/aboutUsPage/chef2.jpeg"
                  alt=""
                  className="w-auto h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
          {/* reviews */}
          <div className="w-full flex flex-col xl:px-20 md:px-16 px-12 ">
            <div className="w-full flex flex-col items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="About"
                title="Testimonials"
                lineBg="bg-[#202020]"
                subtitleSize="text-2xl"
                titleSize="text-6xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 flex relative items-center justify-center bg-[url(/homepage-img/testimonial-cover.jpeg)] bg-fixed bg-cover  max-w-full h-[540px]">
        <div className="w-full grid grid-cols-3 gap-16 px-20 ">
          {/* 1 */}
          <div className="w-full bg-[#75797a50] rounded-[10px] p-6 flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
              &quot;Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
              nam modo ancillae tacimates et, cu vim omnes phaedrum
              conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
              tacimates reformidans. Congue corpora vis ad.&quot;
            </p>
            <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
              - John Doe -
            </h2>
            <h3 className="text-yellow-400 flex gap-2 text-3xl font-bold ">
              {" "}
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </h3>{" "}
          </div>
          {/* 2 */}
          <div className="w-full bg-[#75797a50] rounded-[10px] p-6 flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
              &quot;Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
              nam modo ancillae tacimates et, cu vim omnes phaedrum
              conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
              tacimates reformidans. Congue corpora vis ad.&quot;
            </p>
            <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
              - John Doe -
            </h2>
            <h3 className="text-yellow-400 flex gap-2 text-3xl font-bold ">
              {" "}
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </h3>{" "}
          </div>
          {/* 3 */}
          <div className="w-full bg-[#75797a50] rounded-[10px] p-6 flex flex-col items-center justify-center">
            <p className="text-[#FFFFFF] text-center text-xl font-bold capitalize mb-2">
              &quot;Ferri altera eripuit ne nam. Duo at tibique conclusionemque,
              nam modo ancillae tacimates et, cu vim omnes phaedrum
              conclusionemque. Ex tempor eligendi corrumpit vim, sea ei
              tacimates reformidans. Congue corpora vis ad.&quot;
            </p>
            <h2 className="text-[#FFFFFF] text-2xl font-bold capitalize mb-2">
              - John Doe -
            </h2>
            <h3 className="text-yellow-400 flex gap-2 text-3xl font-bold ">
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
  );
};

export default AboutUsPageContent;
