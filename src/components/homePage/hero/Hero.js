import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";

// import { useScroll, useTransform, motion } from "framer-motion";

// const targetRef = React.useRef(null);
// const targetRef2 = React.useRef(null);

// const { scrollYProgress } = useScroll(
//   {
//     target: targetRef,
//     offset: ["start start", "end start"],
//   },
//   {
//     target: targetRef2,
//     offset: ["start end", "end start"],
//   }
// );

// const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
// const opacity2 = useTransform(scrollYProgress, [1, 0.6], [1, 0]);

const Hero = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    // lazyLoad: true,    speed: 500,
    fade: true,
    speed: 900,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    touchThreshold: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      {/* <motion.section
        className="xl:px-10 md:px-8 px-6 pt-10 "
        style={{ opacity }}
        ref={targetRef}
      >
        <Hero />
      </motion.section>

      <motion.section
        style={{ opacity: opacity2 }}
        ref={targetRef2}
        className="xl:px-10 md:px-8 px-6 pb-10"
      >
        <div className=" w-full flex flex-col items-center justify-start gap-20">
          <img src="/output-onlinegiftools.gif" alt="" className="w-28 h-28" />
          <img src="/output-onlinegiftools.gif" alt="" className="w-24 h-24" />
          <img src="/output-onlinegiftools.gif" alt="" className="w-20 h-20" />
        </div>
      </motion.section> */}

      <div className="w-full max-h-screen relative overflow-hidden -mt-[132px] ">
        {/* <div className=" container  mx-auto   "> */}

        {/* <img
          src="/hero-food/pizza2.jpg"
          alt=""
          className="w-full h-full bg-cover absolute inset-0 z-0"
        /> */}
        <Slider {...sliderSettings} className="w-full h-full ">
          <div className="w-full h-full relative ">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="/hero-food/slider-2.jpg"
              alt=""
              className="w-full h-full  "
            />
            <div className=" w-full  absolute left-0 top-[35%]  flex flex-col gap-1 md:gap-2.5 xl:gap-4 items-center justify-center z-20">
              <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold uppercase">
                Welcome
              </h1>
              <p className="text-white  2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold capitalize">
                to the shack
              </p>
              <Link href="/reservation">
                <CommonButton
                  btnText="Book Now"
                  borderColor="border-[#FFFFFF]"
                  textColor="text-[#FFFFFF]"
                  hoverBorderColor="hover:border-[#e4ae62]"
                  hoverTextColor="hover:text-[#FFFFFF]"
                />
              </Link>
            </div>
          </div>
          <div className="w-full h-full relative ">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src="/hero-food/slider-1.jpg"
              alt=""
              className="w-full h-full  "
            />
            <div className=" w-full  absolute left-0 top-[35%]  flex flex-col gap-1 md:gap-2.5 xl:gap-4 items-center justify-center z-20">
              <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold uppercase">
                Welcome
              </h1>
              <p className="text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm font-semibold capitalize">
                enjoy the food
              </p>

              <Link href="/reservation">
                <CommonButton
                  btnText="Book Now"
                  borderColor="border-[#FFFFFF]"
                  textColor="text-[#FFFFFF]"
                  hoverBorderColor="hover:border-[#e4ae62]"
                  hoverTextColor="hover:text-[#FFFFFF]"
                />{" "}
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
