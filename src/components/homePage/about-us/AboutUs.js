import CommonButton from "@/components/shared/button/CommonButton";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import Link from "next/link";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";
const AboutUs = () => {
  // const targetRef = React.useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: [" start end", "end end"],
  // });

  // // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 1]);

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    // <motion.div className="w-full" style={{ opacity }} ref={targetRef}>
    <div className="w-full relative">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row xl:gap-10 md:gap-8 gap-6 justify-between pageContainerPaddingX pageContainerPaddingY">
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-1 md:gap-2 lg:gap-3 xl:gap-4">
            <div className=" w-full flex flex-col items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <div className=" hidden max-w-max lg:flex flex-col gap-1 md:gap-2 items-end">
                <h1 className=" max-w-max py-2 xl:border-b-8 md:border-b-[6px] border-b-4 border-b-[#e4ae62] font-bold text-[#202020] text-2xl md:text-4xl xl:text-6xl">
                  About Us
                </h1>

                <div className="xl:w-28 md:w-20 w-16 h-0.5 md:h-1 bg-[#202020]"></div>
              </div>
              <div className="lg:hidden block">
                <CommonContentHeader
                  textColor="text-[#202020]"
                  // subtitle="About"
                  title="About Us"
                  lineBg="bg-[#202020]"
                  // subtitleSize="text-2xl"
                  titleSizeXl="text-6xl"
                  titleSizeMd="text-4xl"
                  titleSize="text-2xl"
                />
              </div>

              <h2 className="text-[#202020] text-lg md:text-xl xl:text-2xl font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus
              </h2>
              <p className="text-[#202020] text-base md:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus accusantium tempora voluptatibus voluptate. Quisquam
                voluptatum, voluptas, quod, quas quae quia dolorum doloribus
                accusantium tempora voluptatibus voluptate.
              </p>
            </div>
            <div className=" flex justify-center items-center w-full">
              <Link href="/about">
                <CommonButton
                  btnText="Find More"
                  borderColor="border-[#202020]"
                  textColor="text-[#202020]"
                  hoverBorderColor="hover:border-[#e4ae62]"
                  hoverTextColor="hover:text-[#FFFFFF]"
                />
              </Link>
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

      {isVisible && (
        <div
          onClick={scrollToTop}
          className=" text-[#e4ae62] z-[9999] text-4xl fixed bottom-8 right-10 cursor-pointer"
        >
          <BiSolidUpArrowCircle />
        </div>
      )}

      {/* </motion.div> */}
    </div>
  );
};

export default AboutUs;
