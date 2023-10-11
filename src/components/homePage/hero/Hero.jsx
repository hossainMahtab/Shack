import React from "react";
// import { useScroll, useTransform, motion } from "framer-motion";

const Hero = () => {
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

  return (
    <>
      {/* <motion.section
        className="px-10 pt-10 "
        style={{ opacity }}
        ref={targetRef}
      >
        <Hero />
      </motion.section>

      <motion.section
        style={{ opacity: opacity2 }}
        ref={targetRef2}
        className="px-10 pb-10"
      >
        <div className=" w-full flex flex-col items-center justify-start gap-20">
          <img src="/output-onlinegiftools.gif" alt="" className="w-28 h-28" />
          <img src="/output-onlinegiftools.gif" alt="" className="w-24 h-24" />
          <img src="/output-onlinegiftools.gif" alt="" className="w-20 h-20" />
        </div>
      </motion.section> */}

      <div className="w-full  h-screen relative -mt-[64px] ">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* <div className=" container  mx-auto   "> */}
        <img
          src="/hero-food/pizza2.jpg"
          alt=""
          className="w-full h-full bg-cover absolute inset-0 z-0"
        />
        <div className=" absolute inset-1 flex items-center justify-center z-20">
          <h1 className="text-6xl text-white font-bold">Welcome</h1>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Hero;
