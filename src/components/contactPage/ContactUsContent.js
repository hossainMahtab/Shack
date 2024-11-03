import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const ContactUsContent = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-4 lg:gap-6 xl:gap-8 ">
          {/* story */}
          <div className="w-full flex flex-col  pt-12 lg:pt-16 xl:pt-20">
            <div className="w-full flex flex-col items-center text-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="Feel Free To"
                title="Contact Us"
                lineBg="bg-[#202020]"
                subtitleSizeXl="text-2xl"
                subtitleSizeLg="text-xl"
                subtitleSize="text-lg"
                titleSizeXl="text-6xl"
                titleSizeLg="text-5xl"
                titleSize="text-4xl"
              />
            </div>
            <div className="w-full  flex flex-col lg:flex-row  justify-between py-4 lg:py-7 xl:py-10">
              <div className=" w-full lg:w-1/2 flex lg:flex-row flex-col bg-[#202020] p-4 lg:p-6 xl:p-8 text-white gap-4 lg:gap-3 xl:gap-4">
                <div className="w-full flex flex-col lg:items-start items-center  ">
                  <CommonContentHeader
                    textColor="text-[#FFFFFF]"
                    // subtitle="Reserve a table"
                    title="We're Open"
                    lineBg="bg-[#FFFFFF]"
                    // subtitleSize="text-2xl"
                    titleSizeXl="text-5xl"
                    titleSizeLg="text-4xl"
                    titleSize="text-3xl"
                  />
                </div>
                <div className="w-full flex flex-col gap-2 lg:gap-3 xl:gap-4">
                  <p className="text-base lg:text-lg xl:text-xl">
                    Monday - Friday: 11:00 AM - 11:00 PM
                  </p>
                  <p className="text-base lg:text-lg xl:text-xl">
                    Saturday - Sunday: 11:00 AM - 12:00 PM
                  </p>
                </div>
                <div className="w-full flex flex-col gap-2 lg:gap-3 xl:gap-4">
                  <div className="flex flex-row gap-2 lg:gap-3 xl:gap-4 items-center">
                    <p className="text-lg lg:text-xl xl:text-2xl">
                      <FaMapMarkerAlt />
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <p className="text-base lg:text-lg xl:text-xl">
                        Address:
                      </p>
                      <p className="text-base lg:text-lg xl:text-xl">
                        121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 lg:gap-3 xl:gap-4">
                  <div className="flex flex-row gap-2 lg:gap-3 xl:gap-4 items-center">
                    <p className="text-lg lg:text-xl xl:text-2xl">
                      <MdCall />
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <p className="text-base lg:text-lg xl:text-xl">Phone:</p>
                      <p className="text-base lg:text-lg xl:text-xl">
                        +1 123 456 7890
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 lg:gap-3 xl:gap-4 items-center">
                    <p className="text-lg lg:text-xl xl:text-2xl">
                      {" "}
                      <MdOutlineEmail />{" "}
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <p className="text-base lg:text-lg xl:text-xl">Email:</p>
                      <p className="text-base lg:text-lg xl:text-xl">
                        {" "}
                        info@shackrestaurant{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2  ">
                <img
                  src="/contactUsPage/map.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
