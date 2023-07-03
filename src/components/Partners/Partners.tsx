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
import Chaintimes from "@/assets/Partners/Chaintimes.png";
import FileCoin from "@/assets/Partners/FileCoin.svg";
import Huobi from "@/assets/Partners/Huobi.svg";
import BingX from "@/assets/Partners/BingX.png";
import noneland from "@/assets/Partners/noneland.png";
import PAnews from "@/assets/Partners/PAnews.png";
import ABM from "@/assets/Partners/ABM.jpg";
import buzhidao from "@/assets/Partners/buzhidao.png";
import Jclub from "@/assets/Partners/Jclub.jpg";
import rabbit from "@/assets/Partners/rabbit.jpg";
import { Box } from "@chakra-ui/react";
import PartnersCard from "./Card";

export default function Partners() {
  // const AllArray = [
  // { avatar: lead.src, name: "主辦單位" },
  // { avatar: kryptocamp.src, name: "執行單位" },
  // { avatar: amber.src, name: "執行單位" },
  // { avatar: jump.src, name: "合作夥伴" },
  // { avatar: wormhole.src, name: "合作夥伴" },
  // { avatar: flow.src, name: "合作夥伴" },
  // { avatar: circle.src, name: "合作夥伴" },
  // { avatar: google.src, name: "雲端夥伴" },
  // ];

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
            贊助夥伴
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
        <div className="mt-2 hidden w-full flex-col items-center gap-8 lg:flex">
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">HOST</div>
            <PartnersCard avatar={builder.src} />
          </div>
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">CO - HOST</div>
            <div className="grid grid-cols-3 gap-10">
              <PartnersCard avatar={zombie.src} w="210" />
              <PartnersCard avatar={lead.src} />
              <PartnersCard avatar={carry.src} w="180" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">Strategic Partner</div>
            <div className="grid grid-cols-1 gap-10">
              <PartnersCard avatar={TBW.src} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">Partner</div>
            <div className="flex justify-center gap-10">
              <PartnersCard avatar={wormhole.src} />
              <PartnersCard avatar={Chaintimes.src} />
              <PartnersCard avatar={FileCoin.src} />
            </div>
            <div className="flex justify-center gap-10">
              <PartnersCard avatar={Huobi.src} />
              <PartnersCard avatar={BingX.src} w="220" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">Media Partner</div>
            <div className="grid grid-cols-3 gap-10">
              <PartnersCard avatar={noneland.src} />
              <PartnersCard avatar={ABM.src} w="150" />
              <PartnersCard avatar={PAnews.src} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-10">
            <div className="text-5xl font-bold">Community Partner</div>
            <div className="grid grid-cols-3 gap-10">
              <PartnersCard avatar={buzhidao.src} w="100" />
              <PartnersCard avatar={Jclub.src} w="300" />
              <PartnersCard avatar={rabbit.src} />
            </div>
          </div>
        </div>
        {/* Mobile */}
        {/* <div className="flex w-4/5 flex-col items-center gap-10 lg:hidden">
          {AllArray.map((item, idx) => (
            <PartnersCard avatar={item.avatar} key={idx} name={item.name} />
          ))}
        </div> */}
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
