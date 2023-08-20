import React from "react";
import line from "@/assets/line.svg";
import lineM from "@/assets/lineM.svg";
import sideBgT from "@/assets/sideBgT.svg";
import sideBgTM from "@/assets/sideBgTM.svg";
import sideBg from "@/assets/sideBg.svg";
import sideBgM from "@/assets/sideBgM.svg";
import { useBreakpointValue } from "@chakra-ui/react";

export default function TimeLine(props: { data: any }) {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const numberStyle =
    "flex max-h-[2.5rem] z-20 min-w-[2.5rem] items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black";
  return (
    <>
      <img
        src={isMobile ? sideBgTM.src : sideBgT.src}
        alt="TimeLine"
        className="mt-16 w-full"
      />
      <div className="h-full w-full px-5 py-12 lg:px-16">
        <div className="hidden h-full w-full flex-col items-center justify-center gap-10 whitespace-pre-wrap lg:flex">
          <div className="title flex w-4/5 lg:gap-24 2xl:gap-12">
            <div className="w-1/3 text-2xl">
              {data?.data[0].title}
              <div className="pt-2 text-base text-text">
                {data?.data[0].date}
              </div>
            </div>
            <div className="w-1/3 text-2xl">
              {data?.data[1].title}
              <div className="pt-2 text-base text-text">
                {data?.data[1].date}
              </div>
            </div>
            <div className="w-1/3 text-2xl">
              {data?.data[2].title}
              <div className="pt-2 text-base text-text">
                {data?.data[2].date}
              </div>
            </div>
          </div>
          <div className="line relative flex w-4/5 lg:gap-24 2xl:gap-12">
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                1
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                2
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                3
              </div>
            </div>
            <div className="absolute top-1/2 w-full">
              <img src={line.src} width="100%" height="2px" />
            </div>
          </div>
          <div className="content flex w-4/5 text-sm text-text lg:gap-24 2xl:gap-12">
            <div className="w-1/3">
              <div className=" max-w-xs">{data?.data[0].content}</div>
            </div>
            <div className="w-1/3">
              <div className=" max-w-xs">{data?.data[1].content}</div>
            </div>
            <div className="w-1/3">
              <div className=" max-w-xs">{data?.data[2].content}</div>
            </div>
          </div>
        </div>
        <div className="title relative flex w-full flex-col items-center gap-10 whitespace-pre-wrap lg:hidden">
          <img
            src={lineM.src}
            width="2px"
            className="absolute left-5 z-10 h-full object-cover"
          />
          <div className="flex w-full justify-between">
            <div className={numberStyle}>1</div>
            <div className="flex flex-1 flex-col gap-5 pl-7">
              <div className="text-2xl">{data?.data[0].title}</div>
              <div className="text-base font-bold text-text">
                {data?.data[0].date}
              </div>
              <div className="max-w-xs text-text">{data?.data[0].content}</div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className={numberStyle}>2</div>
            <div className="flex flex-1 flex-col gap-5 pl-7">
              <div className="text-2xl">{data?.data[1].title}</div>
              <div className="text-base font-bold text-text">
                {data?.data[1].date}
              </div>
              <div className="max-w-xs text-text">{data?.data[1].content}</div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className={numberStyle}>3</div>
            <div className="flex flex-1 flex-col gap-5 pl-7">
              <div className="text-2xl">{data?.data[2].title}</div>
              <div className="text-base font-bold text-text">
                {data?.data[2].date}
              </div>
              <div className="max-w-xs text-text">{data?.data[2].content}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={isMobile ? sideBgM.src : sideBg.src}
        alt="TimeLine"
        className="w-full"
      />
    </>
  );
}
