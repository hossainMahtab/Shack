import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const HomePage = () => {
  const targetRef = React.useRef(null);
  const targetRef2 = React.useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: targetRef,
      offset: ["start start", "end start"],
    },
    {
      target: targetRef2,
      offset: ["start end", "end start"],
    }
  );

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [1, 0.6], [1, 0]);

  return (
    <>
      <motion.section
        className="    px-10 pt-10 "
        style={{ opacity }}
        ref={targetRef}
      >
        <div className=" text-[#202020] w-full flex flex-col items-center justify-start py-4 gap-16 ">
          <h1>Hello World</h1>
          <h2>
            It&apos;s a{" "}
            <span className=" font-bold text-lg text-green-600">Blog</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectet ur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectet ur adipisicing elit.
          </p>
        </div>
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
      </motion.section>
    </>
  );
};

export default HomePage;