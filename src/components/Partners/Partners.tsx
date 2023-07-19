import React from "react";
import style from "@/assets/Partners/partnerStyle.svg";
import BG from "@/assets/Partners/partnerBg.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";
import PartnersCard from "./Card";
import PartnersM from "./MobileCard";

export default function Partners(props: { data: any }) {
  const { data } = props;
  const { host, coHost, strategic, partners, gem, media, community } = data;

  return (
    <>
      <div className="relative">
        <div className="absolute z-10 w-full">
          <img
            src={BG.src}
            alt=""
            width="100%"
            height="100%"
            className="pointer-events-none -z-10"
          />
        </div>
        <div className="flex w-full justify-center gap-14 pb-36 pt-36 lg:pt-72">
          <img
            src={style.src}
            alt=""
            width="70"
            height="100"
            className="hidden lg:block"
          />
          <div className="flex flex-col items-center">
            <div
              className={`bg-gradient-to-r from-greenF to-greenT bg-clip-text text-[4rem] font-bold uppercase text-transparent`}
            >
              {data.title}
            </div>
            <div className="flex text-4xl font-extrabold leading-[64px]">
              {data.subTitle}
            </div>
          </div>
          <img
            src={style.src}
            alt=""
            width="70"
            height="100"
            className="hidden lg:block"
          />
        </div>
      </div>
      <div className="z-50 my-10 flex h-full items-center justify-center">
        <div className="hidden w-full flex-col items-center gap-16 lg:flex">
          <PartnersCard logo={host} type="HOST" />
          <PartnersCard logo={coHost} type="CO - HOST" />
          <PartnersCard logo={strategic} type="Strategic Partner" />
          <PartnersCard logo={partners} grid="4" type="Partner" />
          <PartnersCard logo={gem} type="Gem" />
          <PartnersCard logo={media} type="Media Partner" />
          <PartnersCard logo={community} type="Community Partner" />
        </div>
        {/* Mobile  */}
        <div className="flex w-full flex-col items-center gap-12 px-6 lg:hidden">
          <PartnersM logo={host} type="HOST" />
          <PartnersM logo={coHost} type="CO - HOST" />
          <PartnersM logo={strategic} type="Strategic Partner" />
          <PartnersM logo={partners} type="Partner" />
          <PartnersM logo={gem} type="Gem" />
          <PartnersM logo={media} type="Media Partner" />
          <PartnersM logo={community} type="Community Partner" />
        </div>
      </div>
      <Box
        className="flex h-56 w-full"
        bgImg={Mask.src}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="top"
      />
    </>
  );
}
