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
  const { starters, mainCourse, soups, desserts, drinks } = demoItems;
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto">
          <div className="w-full flex flex-col pageContainerPaddingY">
            <div className="w-full flex flex-col items-center">
              <CommonContentHeader
                textColor="text-[#202020]"
                subtitle="DISCOVER"
                title="Our Menu"
                lineBg="bg-[#202020]"
                subtitleSizeXl="text-2xl"
                subtitleSizeLg="text-xl"
                subtitleSize="text-lg"
                titleSizeXl="text-6xl"
                titleSizeLg="text-4xl"
                titleSize="text-2xl"
              />

              <h3 className="text-base lg:text-lg xl:text-xl text-[#202020] text-center mt-2 lg:mt-4 xl:mt-6">
                Explore texture, color and of course the ultimate tastes with
                our menu of the season. All the ingredients are fresh and
                carefully selected by our chefs. <br /> Enjoy an extraordinary
                dinning experience.
              </h3>
            </div>
            <div className=" w-full flex flex-col gap-4 lg:gap-6 xl:gap-8 py-4 lg:py-7 xl:py-10">
              <Accordion className="!rounded-[10px]">
                <AccordionSummary
                  className=" accordion-hover !rounded-[10px] !py-2 lg:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out xl:!text-2xl lg:!text-xl !text-base !font-semibold !uppercase"
                  sx={{
                    border: "6px solid #202020",

                    "& .MuiAccordionSummary-expandIconWrapper": {
                      color: "#202020",
                    },

                    // "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root":
                    //   {
                    //     fontSize: "3rem",
                    //   },
                  }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h1 className=" text-xl lg:text-2xl xl:text-3xl font-semibold  uppercase">
                    The Taste Teasers
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16  xl:gap-x-20 gap-y-2 lg:gap-y-3 xl:gap-y-4">
                    {starters.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 lg:gap-3 xl:gap-4 pt-2 lg:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className=" w-12 lg:w-16 xl:w-20 h-12 lg:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 lg:gap-2">
                              <h1 className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 lg:mx-2 mb-1 lg:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className=" text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600">
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
                  className=" accordion-hover !rounded-[10px] !py-2 lg:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
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
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold  uppercase">
                    The Gourmet Affair
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16  xl:gap-x-20 gap-y-2 lg:gap-y-3 xl:gap-y-4">
                    {mainCourse.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 lg:gap-3 xl:gap-4 pt-2 lg:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 lg:w-16 xl:w-20 h-12 lg:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 lg:gap-2">
                              <h1 className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 lg:mx-2 mb-1 lg:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600">
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
                  className=" accordion-hover !rounded-[10px] !py-2 lg:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
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
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold  uppercase">
                    The Broth Bar
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16  xl:gap-x-20 gap-y-2 lg:gap-y-3 xl:gap-y-4">
                    {soups.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 lg:gap-3 xl:gap-4 pt-2 lg:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 lg:w-16 xl:w-20 h-12 lg:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-1 lg:gap-2">
                              <h1 className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 lg:mx-2 mb-1 lg:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600">
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
                  className=" accordion-hover !rounded-[10px] !py-2 lg:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
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
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold  uppercase">
                    The Dessert Vault
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16  xl:gap-x-20 gap-y-2 lg:gap-y-3 xl:gap-y-4">
                    {desserts.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center gap-2 lg:gap-3 xl:gap-4 pt-2 lg:pt-3 xl:pt-4"
                      >
                        <img
                          src={item.image}
                          alt="menu"
                          className="w-12 lg:w-16 xl:w-20 h-12 lg:h-16 xl:h-20 rounded-full -rotate-[90deg]"
                        />
                        <div className="w-full flex flex-col ">
                          <div className="w-full flex ">
                            <div className=" w-auto flex gap-2">
                              <h1 className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                {item.item}
                              </h1>
                            </div>
                            <div className=" mx-1 lg:mx-2 mb-1 lg:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                            <p className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                              {item.price}
                            </p>
                          </div>
                          <p className="text-xs lg:text-sm text-slate-600">
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
                  className=" accordion-hover !rounded-[10px] !py-2 lg:!py-3 xl:!py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
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
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold  uppercase">
                    The Sip Suite
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="w-full  grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16  xl:gap-x-20 gap-y-2 lg:gap-y-3 xl:gap-y-4 ">
                    {drinks.map((drink, index) => (
                      <div key={index}>
                        <h1 className="xl:text-2xl lg:text-xl text-lg text-[#202020] font-bold text-start">
                          {drink.category}
                        </h1>
                        {drink.items.map((item, index) => (
                          <div
                            key={index}
                            className=" w-full flex items-center gap-2 lg:gap-3 xl:gap-4 pt-2 lg:pt-3 xl:pt-4"
                          >
                            <img
                              src={item.image}
                              alt="menu"
                              className="w-12 lg:w-16 xl:w-20 h-12 lg:h-16 xl:h-20 rounded-full object-cover"
                            />
                            <div className="w-full flex flex-col ">
                              <div className="w-full flex ">
                                <div className=" w-auto flex gap-2">
                                  <h1 className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                    {item.item}
                                  </h1>
                                </div>
                                <div className=" mx-1 lg:mx-2 mb-1 lg:mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                                <p className="text-sm lg:text-base xl:text-lg text-[#202020] font-semibold">
                                  {item.price}
                                </p>
                              </div>
                              <p className="text-xs lg:text-sm text-slate-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="w-full flex justify-center xl:mt-4 lg:mt-3 mt-2">
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
