import React from "react";
import sideBgT from "@/assets/sideBgT.svg";
import Section from "../Section/Section";
import HunterCard from "./Card";
import sideBgTM from "@/assets/sideBgTM.svg";
import { useBreakpointValue } from "@chakra-ui/react";

export default function GemHunter(props: { data: any }) {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Section
        title={{ title: data.title.name, color: data.title.color }}
        subTitle={data.subTitle}
        id={data.id}
      >
        <div className="flex w-full flex-col items-center justify-center py-12">
          <div className="h-32 w-4/5 rounded-2xl bg-gradient-to-r from-yellowF to-yellowT p-[2px] shadow-yellowLi transition-all">
            <div
              className={`flex h-full w-full items-center justify-center gap-6 rounded-2xl bg-bg p-4 md:gap-2`}
            >
              <div className="bg-gradient-to-r from-yellowF to-yellowT bg-clip-text p-2 text-[2.5rem] text-transparent">
                {data.totalPrize}
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
          {data?.data.map((item: any, idx: any) => (
            <HunterCard
              key={idx}
              title={item.title}
              prize={item.prize}
              pic={{ pic: item.pic, w: "50" }}
              data={item.data}
            />
          ))}
        </div>
      </Section>

      <img
        src={isMobile ? sideBgTM.src : sideBgT.src}
        alt="TimeLine"
        className="w-full"
      />
    </>
  );
}
