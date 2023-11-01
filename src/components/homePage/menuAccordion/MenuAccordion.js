import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { demoItems } from "@/components/menuPage/DemoItems";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";
import CommonContentHeader from "@/components/shared/contentHeader/CommonContentHeader";

const MenuAccordion = () => {
  const { starters, mainCourse, soups, desserts } = demoItems;
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
          <div className="w-full flex flex-col xl:px-10 md:px-8 px-6 py-8 md:py-14  xl:py-20">
            <div className="w-full flex flex-col items-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="DISCOVER"
                title="Our Menu"
                lineBg="bg-[#202020]"
                subtitleSizeXl="text-2xl"
                subtitleSizeMd="text-xl"
                subtitleSize="text-lg"
                titleSizeXl="text-6xl"
                titleSizeMd="text-4xl"
                titleSize="text-2xl"
              />
              <h3 className="xl:text-xl md:text-lg text-base text-[#202020] text-center mt-2 md:mt-4 xl:mt-6">
                Explore texture, color and of course the ultimate tastes with
                our menu of the season. All the ingredients are fresh and
                carefully selected by our chefs. <br /> Enjoy an extraordinary
                dinning experience.
              </h3>
            </div>
            <div className=" w-full flex flex-col gap-4 md:gap-6 xl:gap-8 py-4 md:py-7 xl:py-10">
              <Accordion className="!rounded-[10px]">
                <AccordionSummary
                  className=" accordion-hover !rounded-[10px] !py-2 md:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                  sx={{
                    border: "6px solid #202020",

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#202020",
                    },

                    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root":
                      {
                        fontSize: "3rem",
                      },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className=" text-xl md:text-2xl xl:text-3xl font-semibold  uppercase">
                    Starters
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16  xl:gap-x-20 gap-y-2 md:gap-y-3 xl:gap-y-4">
                    {starters.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 md:gap-3 xl:gap-4 pt-2 md:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className=" w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 md:gap-2">
                              <h1 className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 md:mx-2 mb-1 md:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className=" text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion className="!rounded-[10px]">
                <AccordionSummary
                  className=" accordion-hover !rounded-[10px] !py-2 md:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                  sx={{
                    border: "6px solid #202020",

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#202020",
                    },

                    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root":
                      {
                        fontSize: "3rem",
                      },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold  uppercase">
                    Main Courses
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16  xl:gap-x-20 gap-y-2 md:gap-y-3 xl:gap-y-4">
                    {mainCourse.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 md:gap-3 xl:gap-4 pt-2 md:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 md:gap-2">
                              <h1 className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 md:mx-2 mb-1 md:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion className="!rounded-[10px]">
                <AccordionSummary
                  className=" accordion-hover !rounded-[10px] !py-2 md:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                  sx={{
                    border: "6px solid #202020",

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#202020",
                    },

                    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root":
                      {
                        fontSize: "3rem",
                      },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold  uppercase">
                    Soups
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16  xl:gap-x-20 gap-y-2 md:gap-y-3 xl:gap-y-4">
                    {soups.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 md:gap-3 xl:gap-4 pt-2 md:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 md:gap-2">
                              <h1 className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 md:mx-2 mb-1 md:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion className="!rounded-[10px]">
                <AccordionSummary
                  className=" accordion-hover !rounded-[10px] !py-2 md:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                  sx={{
                    border: "6px solid #202020",

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#202020",
                    },

                    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root":
                      {
                        fontSize: "3rem",
                      },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold  uppercase">
                    Desserts
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16  xl:gap-x-20 gap-y-2 md:gap-y-3 xl:gap-y-4">
                    {desserts.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 md:gap-3 xl:gap-4 pt-2 md:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-2">
                              <h1 className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 md:mx-2 mb-1 md:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm md:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="w-full flex justify-center">
              <Link href="/menu">
                <CommonButton
                  btnText="View Menu"
                  borderColor="border-[#202020]"
                  textColor="text-[#202020]"
                  hoverBorderColor="hover:border-[#e4ae62]"
                  hoverTextColor="hover:text-[#FFFFFF]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuAccordion;
