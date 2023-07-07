import React from "react";
import style from "@/assets/Partners/partnerStyle.svg";
import content from "@/assets/Partners/partnersContent.svg";
import BG from "@/assets/Partners/partnerBg.svg";
import Mask from "@/assets/Mask.svg";
import builder from "@/assets/Partners/builder.svg";
import carry from "@/assets/Partners/carry.svg";
import lead from "@/assets/Partners/lead.svg";
import zombie from "@/assets/Partners/zombie.svg";
import TBW from "@/assets/Partners/TBW.svg";
import wormhole from "@/assets/Partners/wormhole.svg";
import chain from "@/assets/Partners/chain.svg";
import FileCoin from "@/assets/Partners/FileCoin.svg";
import Huobi from "@/assets/Partners/Huobi.svg";
import BingX from "@/assets/Partners/BingX.svg";
import ikala from "@/assets/Partners/ikala.svg";
import Orderly from "@/assets/Partners/Orderly.svg";
import IPFS from "@/assets/Partners/IPFS.png";
import venture from "@/assets/Partners/venture.svg";
import noneland from "@/assets/Partners/noneland.svg";
import PAnews from "@/assets/Partners/PAnews.svg";
import followIn from "@/assets/Partners/followIn.svg";
import ABM from "@/assets/Partners/ABM.svg";
import buzhidao from "@/assets/Partners/buzhidao.png";
import Jclub from "@/assets/Partners/Jclub.png";
import rabbit from "@/assets/Partners/rabbit.png";
import { Box } from "@chakra-ui/react";
import PartnersCard from "./Card";
import PartnersM from "./MobileCard";

export default function Partners() {
  const hostArr = [{ pic: builder.src, w: "" }];
  const coHostArr = [
    { pic: lead.src, w: "" },
    { pic: carry.src, w: "200" },
    { pic: zombie.src, w: "" },
  ];
  const strategicArr = [{ pic: TBW.src, w: "220" }];
  const partnersArr = [
    { pic: wormhole.src, w: "" },
    { pic: chain.src, w: "" },
    { pic: FileCoin.src, w: "250" },
    { pic: Huobi.src, w: "" },
    { pic: BingX.src, w: "200" },
    { pic: ikala.src, w: "" },
    { pic: IPFS.src, w: "200" },
    { pic: venture.src, w: "" },
    { pic: Orderly.src, w: "300" },
  ];
  const mediaArr = [
    { pic: noneland.src, w: "" },
    { pic: ABM.src, w: "" },
    { pic: PAnews.src, w: "" },
    { pic: followIn.src, w: "" },
  ];
  const communityArr = [
    { pic: buzhidao.src, w: "" },
    { pic: Jclub.src, w: "" },
    { pic: rabbit.src, w: "300" },
  ];

  return (
    <>
      <Box
        className="flex flex-col items-center lg:h-[36rem] 2xl:h-[48rem]"
        id="Partners"
        bgImg={BG.src}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <div className="flex w-full justify-center gap-14 px-14 pt-64">
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
              partners
            </div>
            <div className="flex text-4xl font-extrabold leading-[64px]">
              合作夥伴
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
      </Box>
      <div className="my-10 flex h-full items-center justify-center">
        <div className="hidden w-full flex-col items-center gap-16 lg:flex">
          <PartnersCard logo={hostArr} type="HOST" />
          <PartnersCard logo={coHostArr} type="CO - HOST" />
          <PartnersCard logo={strategicArr} type="Strategic Partner" />
          <PartnersCard logo={partnersArr} grid="4" type="Partner" />
          <PartnersCard logo={mediaArr} type="Media Partner" />
          <PartnersCard logo={communityArr} type="Community Partner" />
        </div>
        {/* Mobile  */}
        <div className="mt-8 flex w-4/5 flex-col items-center gap-36 lg:hidden">
          <PartnersM avatar={hostArr} title="HOST" />
          <PartnersM avatar={coHostArr} title="CO - HOST" />
          <PartnersM avatar={strategicArr} title="Strategic Partner" />
          <PartnersM avatar={partnersArr} title="Partner" />
          <PartnersM avatar={mediaArr} title="Media Partner" />
          <PartnersM avatar={communityArr} title="Community Partner" />
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
