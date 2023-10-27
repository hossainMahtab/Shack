import CommonButton from "@/components/shared/button/CommonButton";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
  const targetRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [" start end", "end end"],
  });

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 1]);

  return (
    <motion.div className="w-full" style={{ opacity }} ref={targetRef}>
      <div className="container mx-auto">
        <div className="w-full flex gap-10 justify-between px-10 py-20">
          <div className="w-1/2 flex flex-col justify-between gap-4">
            <div className=" w-full flex flex-col gap-5">
              <div className="  max-w-max flex flex-col gap-2 items-end">
                <h1 className=" max-w-max px-4 py-2 border-b-8 border-b-[#f1b24a] text-[#202020] text-5xl">
                  About Us
                </h1>
                {/* <div className="w-56 flex flex-col gap-2 items-end"> */}
                {/* <div className="w-56 h-2 bg-[#f1b24a] mt-5"></div> */}
                <div className="w-28 h-1 bg-[#202020]"></div>
                {/* </div> */}
              </div>
              <h3 className="text-[#202020] text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, voluptas, quod, quas quae quia dolorum
                doloribus
              </h3>
              <p className="text-[#202020] text-lg">
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
                hoverBorderColor="hover:border-[#BC8D4B]"
                hoverTextColor="hover:text-[#FFFFFF]"
              />
            </div>
          </div>

          <div className="w-1/2">
            <img
              src="/homepage-img/about-7.jpg"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
