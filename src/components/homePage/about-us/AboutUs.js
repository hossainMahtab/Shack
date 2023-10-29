import CommonButton from "@/components/shared/button/CommonButton";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiSolidUpArrowCircle } from "react-icons/bi";
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
        <div className="w-full flex gap-10 justify-between px-10 py-20">
          <div className="w-1/2 flex flex-col justify-between gap-4">
            <div className=" w-full flex flex-col gap-5">
              <div className="  max-w-max flex flex-col gap-2 items-end">
                <h1 className=" max-w-max px-4 py-2 border-b-8 border-b-[#e4ae62] font-bold text-[#202020] text-5xl">
                  About Us
                </h1>
                {/* <div className="w-56 flex flex-col gap-2 items-end"> */}
                {/* <div className="w-56 h-2 bg-[#e4ae62] mt-5"></div> */}
                <div className="w-28 h-1 bg-[#202020]"></div>
                {/* </div> */}
              </div>
              <h2 className="text-[#202020] text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus
              </h2>
              <p className="text-[#202020] text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus accusantium tempora voluptatibus voluptate. Quisquam
                voluptatum, voluptas, quod, quas quae quia dolorum doloribus
                accusantium tempora voluptatibus voluptate.
              </p>
            </div>
            <div className=" max-w-max">
              <CommonButton
                btnText="Find More"
                borderColor="border-[#202020]"
                textColor="text-[#202020]"
                hoverBorderColor="hover:border-[#e4ae62]"
                hoverTextColor="hover:text-[#FFFFFF]"
              />
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

      {isVisible && (
        <div
          onClick={scrollToTop}
          className=" text-[#e4ae62] z-[9999] text-4xl fixed bottom-10 right-10 cursor-pointer"
        >
          <BiSolidUpArrowCircle />
        </div>
      )}

      {/* </motion.div> */}
    </div>
  );
};

export default AboutUs;
