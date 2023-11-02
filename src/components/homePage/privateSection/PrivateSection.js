import CommonButton from "@/components/shared/button/CommonButton";
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
        <div className="w-full flex flex-col md:flex-row xl:gap-10 md:gap-8 gap-6 justify-between xl:px-20 md:px-16 px-12 pb-12 md:pb-16 xl:pb-20">
          <div className=" w-full md:w-1/2">
            <img
              src="/homepage-img/private2outline.png"
              alt=""
              className="w-full h-[300px] md:h-[400px] xl:h-[500px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between items-end gap-2 md:gap-3 xl:gap-4">
            <div className=" w-full flex flex-col items-end gap-2 md:gap-4 xl:gap-6">
              <div className="  max-w-max flex flex-col gap-1 md:gap-2 items-end">
                <h1 className=" font-bold text-right max-w-max px-2 md:px-3 xl:px-4 py-1 md:py-2 border-b-4 md:border-b-[6px] xl:border-b-8 border-b-[#e4ae62] text-[#202020] text-2xl md:text-4xl xl:text-6xl">
                  PRIVATE EVENTS
                </h1>
                {/* <div className="w-56 flex flex-col gap-2 items-end"> */}
                {/* <div className="w-56 h-2 bg-[#e4ae62] mt-5"></div> */}
                <div className=" w-16 md:w-40 xl:w-48 h-0.5 md:h-1 bg-[#202020]"></div>
                {/* </div> */}
              </div>
              <h2 className="text-right text-[#202020] text-lg md:text-xl xl:text-2xl">
                A unique moment needs a special and elegant <br /> place to
                celebrate.
              </h2>
              <p className="text-right text-[#202020] text-base md:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus accusantium tempora voluptatibus voluptate. Quisquam
                voluptatum, voluptas, quod, quas quae quia dolorum doloribus
                accusantium tempora voluptatibus voluptate. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quisquam voluptatum,
                voluptas, quod, quas quae quia dolorum doloribus accusantium
                tempora.
              </p>
            </div>
            <div className=" max-w-max">
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
