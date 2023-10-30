import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";

const ContactUsContent = () => {
  return (
    <div className="w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-8 ">
          {/* story */}
          <div className="w-full flex flex-col px-10 pt-20">
            <div className="w-full flex flex-col items-center text-center">
              <h2 className="text-2xl font-semibold text-[#202020] uppercase mb-1">
                Feel Free to{" "}
              </h2>
              <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
                Contact Us{" "}
              </h1>
              <div className="w-[400px] h-0.5 bg-[#202020] mb-1"></div>
              <div className="w-[400px] h-2 bg-[#202020] mb-2"></div>
            </div>
            <div className="w-full  flex flex-row  justify-between  py-20">
              <div className="w-1/2 flex flex-col bg-[#202020] p-8 text-white gap-4">
                <div className="w-full flex flex-col  ">
                  <h1 className="text-5xl font-semibold  uppercase mb-2">
                    We're Open
                  </h1>
                  <div className="w-[320px] h-0.5 bg-[#FFFFFF] mb-1"></div>
                  <div className="w-[320px] h-2 bg-[#FFFFFF] mb-2"></div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-xl">
                    Monday - Friday: 11:00 AM - 11:00 PM
                  </p>
                  <p className="text-xl">
                    Saturday - Sunday: 11:00 AM - 12:00 PM
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-row gap-4 items-center">
                    <p className="text-2xl">
                      <FaMapMarkerAlt />
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl">Address:</p>
                      <p className="text-xl">
                        121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-row gap-4 items-center">
                    <p className="text-2xl">
                      <MdCall />
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl">Phone:</p>
                      <p className="text-xl">+1 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <p className="text-2xl">
                      {" "}
                      <MdOutlineEmail />{" "}
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl">Email:</p>
                      <p className="text-xl"> info@shackrestaurant </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/2  ">
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
