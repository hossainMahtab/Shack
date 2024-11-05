import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import CommonContentHeader from "../shared/contentHeader/CommonContentHeader";

const ContactUsContent = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-4 lg:gap-6 xl:gap-8">
          {/* story */}
          <div className="w-full flex flex-col pt-12 lg:pt-16 xl:pt-20">
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
            <div className="w-full flex flex-col lg:flex-row justify-between my-4 lg:my-7 xl:my-10 rounded-md lg:rounded-[10px] overflow-hidden ">
              <div className="w-full lg:w-2/3 flex flex-col bg-[#202020] p-4 lg:p-6 xl:p-8 text-white gap-4 lg:gap-3 xl:gap-4">
                <div className="w-full flex flex-col lg:items-start items-center">
                  <CommonContentHeader
                    textColor="text-[#FFFFFF]"
                    title="We're Open"
                    lineBg="bg-[#FFFFFF]"
                    titleSizeXl="text-5xl"
                    titleSizeLg="text-4xl"
                    titleSize="text-3xl"
                  />
                </div>
                <div className="w-full grid grid-flow-row lg:grid-flow-col gap-2 lg:gap-3 xl:gap-4">
                  <p className="text-base lg:text-lg xl:text-xl flex flex-col gap-2">
                    Monday - Friday:
                    <span>11:00 AM - 11:00 PM</span>
                  </p>
                  <p className="text-base lg:text-lg xl:text-xl flex flex-col gap-2">
                    Saturday - Sunday:
                    <span>11:00 AM - 12:00 PM</span>
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
                        121 Rock Street, 21 Avenue, New York, NY 92103-9000
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
                        <a href="tel:+1 123 456 7890">+1 123 456 7890</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 lg:gap-3 xl:gap-4 items-center">
                    <p className="text-lg lg:text-xl xl:text-2xl">
                      <MdOutlineEmail />
                    </p>
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <p className="text-base lg:text-lg xl:text-xl">Email:</p>
                      <p className="text-base lg:text-lg xl:text-xl">
                        <a href="mailto:info@shackrestaurant">
                          info@shackrestaurant
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2065740490156!2d-74.00660538459565!3d40.71277637933037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b531c9f%3A0x80857ac9995b2e15!2s121%20Rock%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sus!4v1691149940848!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
