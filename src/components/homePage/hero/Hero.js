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
    lazyLoad: true,
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
      <div className="w-full  ">
        {/* <div className=" container  mx-auto   "> */}

        {/* <img
          src="/hero-food/pizza2.jpg"
          alt=""
          className="w-full h-full bg-cover absolute inset-0 z-0"
        /> */}
        <Slider {...sliderSettings} className="w-full ">
          <div className="w-full h-full relative ">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src="/hero-food/slider-6.jpg"
              alt=""
              className="w-full min-h-[350px] max-h-screen object-cover  "
            />
            <div className=" w-full  absolute left-0 top-[50%] lg:top-[40%]  flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-center justify-center z-20">
              <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold uppercase">
                Welcome
              </h1>
              <p className="text-white  xl:text-2xl  lg:text-xl md:text-lg sm:text-base text-sm font-semibold capitalize">
                to the shack
              </p>
              <div className="xl:mt-4 lg:mt-3 mt-2">
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
          </div>
          <div className="w-full h-full relative ">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img
              src="/hero-food/slider-3.jpg"
              alt=""
              className="w-full min-h-[350px] max-h-screen object-cover "
            />
            <div className=" w-full  absolute left-0 top-[50%] lg:top-[40%] flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 items-center justify-center z-20">
              <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white font-bold uppercase">
                Welcome
              </h1>
              <p className="text-white  xl:text-2xl  lg:text-xl md:text-lg sm:text-base text-sm font-semibold capitalize">
                enjoy the food
              </p>
              <div className="xl:mt-4 lg:mt-3 mt-2">
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
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
