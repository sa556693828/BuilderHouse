import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";
import sideBgT from "@/assets/sideBgT.svg";
import sideBgTM from "@/assets/sideBgTM.svg";
import sideBg from "@/assets/sideBg.svg";
import sideBgM from "@/assets/sideBgM.svg";
import { useBreakpointValue } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useInView, animated } from "@react-spring/web";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

export default function Prizes(props: { data: any }) {
  const { data } = props;
  const [ref, inView] = useInView();

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => setValue(data.totalPrize), 100);
      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      setValue(0);
    }
  }, [data.totalPrize, inView]);

  return (
    <>
      <img
        src={isMobile ? sideBgTM.src : sideBgT.src}
        alt="TimeLine"
        className="w-full"
      />
      <div
        className="flex w-full flex-col items-center justify-center gap-10 pt-24 lg:pt-32"
        id={data.id}
      >
        <div className="text-[2rem] uppercase">Total Prize</div>
        <div className="h-32 w-4/5 rounded-2xl bg-gradient-to-r from-yellowF to-yellowT p-[2px] shadow-yellowLi transition-all">
          <div
            className={`flex h-full w-full items-center justify-center gap-6 rounded-2xl bg-bg p-4 md:gap-2`}
          >
            {/* <div className="bg-gradient-to-r from-yellowF to-yellowT bg-clip-text p-2 text-[2.5rem] text-transparent">
              $ {data.totalPrize}
            </div> */}
            <animated.div
              className="flex items-center gap-4 text-[2.5rem]"
              ref={ref}
            >
              <div className="bg-gradient-to-r from-yellowF to-yellowT bg-clip-text text-transparent">
                $
              </div>
              <Odometer
                value={value}
                format=",ddd"
                animation="count"
                theme="minimal"
                className="text-yellowT"
              />
            </animated.div>
          </div>
        </div>
      </div>
      <Section
        title={{ title: data.title.name, color: data.title.color }}
        subTitle={data.subTitle}
        // id={data.id}
      >
        <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
          {data?.data.map((item: any, idx: any) => (
            <PrizesCard
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
        src={isMobile ? sideBgM.src : sideBg.src}
        alt="TimeLine"
        className="w-full"
      />
    </>
  );
}
