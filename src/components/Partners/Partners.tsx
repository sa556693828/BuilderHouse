import React from "react";
import kryptocamp from "@/assets/Partners/kryptocamp.svg";

import title from "@/assets/Partners/partner.svg";
import style from "@/assets/Partners/partnerStyle.svg";
import content from "@/assets/Partners/partnersContent.svg";
import BG from "@/assets/Partners/partnerBg.svg";
import Mask from "@/assets/Mask.svg";
import builder from "@/assets/Partners/builder.svg";
import carry from "@/assets/Partners/carry.svg";
import lead from "@/assets/Partners/lead.svg";
import zombie from "@/assets/Partners/zombie.svg";
import TBW from "@/assets/Partners/TBW.png";
import wormhole from "@/assets/Partners/wormhole.svg";
import chain from "@/assets/Partners/chain.png";
import FileCoin from "@/assets/Partners/FileCoin.svg";
import Huobi from "@/assets/Partners/Huobi.svg";
import BingX from "@/assets/Partners/BingX.png";
import ikala from "@/assets/Partners/ikala.png";
import Orderly from "@/assets/Partners/Orderly.svg";
import IPFS from "@/assets/Partners/IPFS.png";
import venture from "@/assets/Partners/venture.png";
import noneland from "@/assets/Partners/noneland.png";
import PAnews from "@/assets/Partners/PAnews.png";
import followIn from "@/assets/Partners/followIn.png";
import ABM from "@/assets/Partners/ABM.png";
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
  const StrategicArr = [{ pic: TBW.src, w: "220" }];
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
  const MediaArr = [
    { pic: noneland.src, w: "" },
    { pic: ABM.src, w: "200" },
    { pic: PAnews.src, w: "" },
    { pic: followIn.src, w: "300" },
  ];
  const CommunityArr = [
    { pic: buzhidao.src, w: "" },
    { pic: Jclub.src, w: "" },
    { pic: rabbit.src, w: "300" },
  ];

  return (
    <>
      <Box
        className="flex flex-col items-center xl:h-[36rem] 2xl:h-[48rem]"
        id="Partners"
        bgImg={BG.src}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <div className="flex w-full flex-col items-center px-14 pt-64">
          <div className="flex w-full justify-center gap-14">
            <img
              src={style.src}
              alt=""
              width="70"
              height="100"
              className="hidden lg:block"
            />
            <img src={title.src} alt="" width="580" height="100" />
            <img
              src={style.src}
              alt=""
              width="70"
              height="100"
              className="hidden lg:block"
            />
          </div>
          <div className="my-8 flex w-full justify-between text-4xl font-extrabold leading-[64px] md:w-[580px] lg:justify-center">
            <img
              src={style.src}
              alt=""
              width="50"
              height="100"
              className="block lg:hidden"
            />
            夥伴
            <img
              src={style.src}
              alt=""
              width="50"
              height="100"
              className="block lg:hidden"
            />
          </div>
        </div>
      </Box>
      <div className="flex h-full items-center justify-center">
        <div className="mt-2 hidden w-full flex-col items-center gap-12 lg:flex">
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">HOST</div>
            <PartnersCard avatar={builder.src} />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">CO - HOST</div>
            <div className="grid grid-cols-3 gap-10">
              <PartnersCard avatar={zombie.src} w="250" />
              <PartnersCard avatar={lead.src} />
              <PartnersCard avatar={carry.src} w="220" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">Strategic Partner</div>
            <div className="grid grid-cols-1 gap-10">
              <PartnersCard avatar={TBW.src} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">Partner</div>
            <div className="flex justify-center gap-10">
              <PartnersCard avatar={wormhole.src} />
              <PartnersCard avatar={chain.src} />
              <PartnersCard avatar={FileCoin.src} />
            </div>
            <div className="flex justify-center gap-10">
              <PartnersCard avatar={Huobi.src} />
              <PartnersCard avatar={BingX.src} w="220" />
              <PartnersCard avatar={ikala.src} />
            </div>
            <div className="flex justify-center gap-10">
              <PartnersCard avatar={IPFS.src} w="220" />
              <PartnersCard avatar={venture.src} w="220" />
              <PartnersCard avatar={Orderly.src} w="400" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">Media Partner</div>
            <div className="grid grid-cols-4 gap-10">
              <PartnersCard avatar={noneland.src} />
              <PartnersCard avatar={ABM.src} w="220" />
              <PartnersCard avatar={PAnews.src} w="240" />
              <PartnersCard avatar={followIn.src} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-10">
            <div className="text-5xl font-bold">Community Partner</div>
            <div className="grid grid-cols-3 gap-10">
              <PartnersCard avatar={buzhidao.src} />
              <PartnersCard avatar={Jclub.src} />
              <PartnersCard avatar={rabbit.src} />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="mt-10 flex w-4/5 flex-col items-center gap-36 lg:hidden">
          <PartnersM avatar={hostArr} title="HOST" />
          <PartnersM avatar={coHostArr} title="CO - HOST" />
          <PartnersM avatar={StrategicArr} title="Strategic Partner" />
          <PartnersM avatar={partnersArr} title="Partner" />
          <PartnersM avatar={MediaArr} title="Media Partner" />
          <PartnersM avatar={CommunityArr} title="Community Partner" />
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
