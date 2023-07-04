import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Taiwan from "@/assets/Taiwan.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Sphere from "@/assets/Sphere.png";
import Vector from "@/assets/Vector.svg";
import Title from "@/assets/Title.svg";
import LinearButton from "../LinearButton/LinearButton";
// -top-[26px]
export default function MainMobile() {
  return (
    <>
      <Flex
        className="h-full w-full flex-col px-5 pb-4 pt-12 transition-all"
        display={{ base: "flex", lg: "none" }}
      >
        <div className="flex w-full items-end justify-between gap-11">
          <img src={Taiwan.src} alt="" width="200" />
          <img src={dotT.src} alt="" width="50" height="50" />
        </div>
        <div className="relative mt-7 flex h-full w-full flex-col justify-center border-y-2 border-line">
          <div className="absolute -top-[16px] right-1/4">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="flex h-3/5 w-full items-end justify-end">
            <div className="w-1/2 pb-4">
              <img src={dotThree.src} alt="" width="20%" height="100" />
            </div>
            <div className="flex h-full justify-center">
              <div className="h-[102%] w-[2px] bg-line" />
            </div>
            <div className="flex w-1/2 justify-end pb-4">
              <img src={Title.src} alt="" width="95%" height="100" />
            </div>
          </div>
          <div className="relative flex w-full items-end justify-center border-b-2 border-line">
            <div className="-mb-[16px] pr-[1px]">
              <img src={Vector.src} alt="" width="30" height="50" />
            </div>
            <div className="absolute -bottom-[16px] -left-4">
              <img src={Vector.src} alt="" width="30" height="50" />
            </div>
          </div>
          <div className="flex h-1/2 w-full items-center">
            <div className="flex h-full w-full flex-col items-start justify-center gap-5 px-6 py-4">
              <div className="text-sm font-normal uppercase md:text-base">
                Taiwan Builder House 是由 BuilderDAO
                主辦的黑客松嘉年華，集結學習、創新和社區建立於一身。在教育區域，將提供一系列的工作坊和講座。我們將邀請一些
                Web3
                行業的領先專家和思想領袖，進行深度的對話和分享。整個活動將是一場豐富多元的
                Web3 探索之旅，我們期待你的參與！
              </div>
              <div>
                <LinearButton color="green">報名</LinearButton>
              </div>
            </div>
          </div>
        </div>
      </Flex>
      {/* <div className="relative my-9 flex w-4/5 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-yellow p-6 pb-10 text-center  text-lg">
 
        <button className="absolute -bottom-10 w-52 rounded-full border-8 border-bg bg-white p-3 text-lg font-semibold text-black transition-all hover:bg-gray-300">
          報名
        </button>
      </div> */}
    </>
  );
}