import CommonButton from "@/components/shared/button/CommonButton";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";
import Link from "next/link";
import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

const PrivateSection = () => {
  //   const targetRef = React.useRef(null);

  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //     offset: [" start end", "end end"],
  //   });

  //   // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  //   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 1]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row xl:gap-10 lg:gap-8 gap-6 justify-between  pb-12 lg:pb-16 xl:pb-20">
          <div className=" w-full lg:w-1/2">
            <img
              src="/homepage-img/private2outline.png"
              alt=""
              className="w-full h-[350px] lg:h-[450px] xl:h-[550px] "
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between items-end gap-2 lg:gap-3 xl:gap-4">
            <div className=" w-full flex flex-col lg:items-end items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <div className=" hidden max-w-max lg:flex flex-col gap-1 lg:gap-2 items-end">
                <h1 className=" max-w-max py-2 xl:border-b-8 lg:border-b-[6px] border-b-4 border-b-[#e4ae62] font-bold text-[#202020] text-2xl lg:text-4xl xl:text-6xl">
                  PRIVATE EVENTS
                </h1>
                {/* <div className="w-56 flex flex-col gap-2 items-end"> */}
                {/* <div className="w-56 h-2 bg-[#e4ae62] mt-5"></div> */}
                <div className=" w-20 lg:w-44 xl:w-56 h-0.5 lg:h-1 bg-[#202020]"></div>
                {/* </div> */}
              </div>
              <div className="lg:hidden block">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="About"
                  title="PRIVATE EVENTS"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSizeXl="text-6xl"
                  titleSizeLg="text-4xl"
                  titleSize="text-2xl"
                />
              </div>
              <h2 className="text-[#202020] text-center lg:text-end text-lg lg:text-xl xl:text-2xl font-semibold">
                A unique moment needs a special and elegant <br /> place to
                celebrate.
              </h2>
              <h3 className="text-[#202020] text-center lg:text-end text-base lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus accusantium tempora voluptatibus voluptate. Quisquam
                voluptatum, voluptas, quod, quas quae quia dolorum doloribus
                accusantium tempora voluptatibus voluptate. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam voluptatum,
                voluptas, quod, quas quae quia dolorum doloribus accusantium
                tempora.
              </h3>
            </div>
            <div className=" flex justify-center lg:justify-end items-center  w-full xl:mt-4 lg:mt-3 mt-2">
              <Link href="/reservation">
                <CommonButton
                  btnText="Book Now"
                  borderColor="border-[#202020]"
                  textColor="text-[#202020]"
                  hoverBorderColor="hover:border-[#e4ae62]"
                  hoverTextColor="hover:text-[#FFFFFF]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSection;
