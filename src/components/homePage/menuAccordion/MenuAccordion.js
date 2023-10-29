import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { demoItems } from "@/components/menuPage/DemoItems";
import CommonButton from "@/components/shared/button/CommonButton";
import Link from "next/link";

export default function MenuAccordion() {
  const { starters, mainCourse, soups, desserts } = demoItems;
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col px-10 py-20">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-[#202020] uppercase mb-1">
              DISCOVER
            </h2>
            <h1 className="text-6xl font-semibold text-[#202020] uppercase mb-2">
              Our Menu
            </h1>
            <div className="w-[360px] h-0.5 bg-[#202020] mb-1"></div>
            <div className="w-[360px] h-2 bg-[#202020] mb-4"></div>
            <h3 className="text-xl text-[#202020] text-center">
              Explore texture, color and of course the ultimate tastes with our
              menu of the season. All the ingredients are fresh and carefully
              selected by our chefs. <br /> Enjoy an extraordinary dinning
              experience.
            </h3>
          </div>
          <div className=" w-full flex flex-col gap-8 py-10">
            <Accordion className="!rounded-[10px]">
              <AccordionSummary
                className=" accordion-hover !rounded-[10px]  !py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                sx={{
                  border: "6px solid #202020",

                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "#202020",
                  },

                  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    fontSize: "3rem",
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="text-3xl font-semibold  uppercase">Starters</h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-full  grid grid-cols-2 gap-x-20 gap-y-4">
                  {starters.map((item) => (
                    <div className=" w-full flex items-center gap-4 pt-4">
                      <img
                        src={item.image}
                        alt="menu"
                        className="w-20 h-20 rounded-full -rotate-[90deg]"
                      />
                      <div className="w-full flex flex-col ">
                        <div className="w-full flex ">
                          <div className=" w-auto flex gap-2">
                            <h1 className="text-lg text-[#202020] font-semibold">
                              {item.item}
                            </h1>
                          </div>
                          <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                          <p className="text-lg text-[#202020] font-semibold">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
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
                className=" accordion-hover !rounded-[10px] !py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                sx={{
                  border: "6px solid #202020",

                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "#202020",
                  },

                  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    fontSize: "3rem",
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="text-3xl font-semibold  uppercase">
                  Main Courses
                </h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-full  grid grid-cols-2 gap-x-20 gap-y-4">
                  {mainCourse.map((item) => (
                    <div className=" w-full flex items-center gap-4 pt-4">
                      <img
                        src={item.image}
                        alt="menu"
                        className="w-20 h-20 rounded-full -rotate-[90deg]"
                      />
                      <div className="w-full flex flex-col ">
                        <div className="w-full flex ">
                          <div className=" w-auto flex gap-2">
                            <h1 className="text-lg text-[#202020] font-semibold">
                              {item.item}
                            </h1>
                          </div>
                          <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                          <p className="text-lg text-[#202020] font-semibold">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
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
                className=" accordion-hover !rounded-[10px] !py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                sx={{
                  border: "6px solid #202020",

                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "#202020",
                  },

                  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    fontSize: "3rem",
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="text-3xl font-semibold  uppercase">Soups</h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-full  grid grid-cols-2 gap-x-20 gap-y-4">
                  {soups.map((item) => (
                    <div className=" w-full flex items-center gap-4 pt-4">
                      <img
                        src={item.image}
                        alt="menu"
                        className="w-20 h-20 rounded-full -rotate-[90deg]"
                      />
                      <div className="w-full flex flex-col ">
                        <div className="w-full flex ">
                          <div className=" w-auto flex gap-2">
                            <h1 className="text-lg text-[#202020] font-semibold">
                              {item.item}
                            </h1>
                          </div>
                          <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                          <p className="text-lg text-[#202020] font-semibold">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
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
                className=" accordion-hover !rounded-[10px] !py-4 !bg-[#FFFFFF] hover:!bg-[#202020] !text-[#202020] hover:!text-[#FFFFFF]  hover:!transition hover:!duration-500 hover:!ease-in-out"
                sx={{
                  border: "6px solid #202020",

                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "#202020",
                  },

                  "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    fontSize: "3rem",
                  },
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h1 className="text-3xl font-semibold  uppercase">Desserts</h1>
              </AccordionSummary>
              <AccordionDetails>
                <div className="w-full  grid grid-cols-2 gap-x-20 gap-y-4">
                  {desserts.map((item) => (
                    <div className=" w-full flex items-center gap-4 pt-4">
                      <img
                        src={item.image}
                        alt="menu"
                        className="w-20 h-20 rounded-full -rotate-[90deg]"
                      />
                      <div className="w-full flex flex-col ">
                        <div className="w-full flex ">
                          <div className=" w-auto flex gap-2">
                            <h1 className="text-lg text-[#202020] font-semibold">
                              {item.item}
                            </h1>
                          </div>
                          <div className=" mx-2 mb-2 flex-grow border-b border-dashed border-slate-600 "></div>
                          <p className="text-lg text-[#202020] font-semibold">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-sm text-slate-600">
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
    </div>
  );
}
