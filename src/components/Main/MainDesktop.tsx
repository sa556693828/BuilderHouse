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
export default function MainDesktop() {
  return (
    <>
      <Flex
        className="h-full w-full flex-col px-28 py-16 transition-all"
        display={{ base: "none", lg: "flex" }}
      >
        <div className="flex w-full items-end justify-start gap-11">
          <img src={Taiwan.src} alt="" width="400" />
          <img src={dotT.src} alt="" width="70" height="50" />
        </div>
        <div className="relative mt-7 flex h-full w-full flex-col justify-center border-y-2 border-line">
          <div className="absolute -top-[26px] right-1/4">
            <img src={Vector.src} alt="" width="50" height="50" />
          </div>
          <div className="flex h-2/5 w-full items-end justify-end">
            <div className="w-2/5" />
            <div className="flex h-full w-1/5 justify-center">
              <div className="h-[110%] w-[2px] bg-line" />
            </div>
            <div className="flex w-2/5 justify-end">
              <img src={dotThree.src} alt="" width="100" height="100" />
            </div>
          </div>
          <div className="relative flex w-full items-end justify-center border-b-2 border-line">
            <div className="-mb-[26px] pr-[1px]">
              <img src={Vector.src} alt="" width="50" height="50" />
            </div>
            {/* <div className="absolute -top-[24px] left-[48%]"></div> */}
            <div className="absolute -bottom-[26px] -left-4">
              <img src={Vector.src} alt="" width="50" height="50" />
            </div>
          </div>
          <div className="flex h-3/5 w-full items-center">
            <div className="flex w-[48%] flex-col items-start gap-2 px-6">
              <div className="text-sm font-normal uppercase xl:text-lg">
                Taiwan Builder House 是由 BuilderDAO
                主辦的黑客松嘉年華，集結學習、創新和社區建立於一身。在教育區域，將提供一系列的工作坊和講座。我們將邀請一些
                Web3
                行業的領先專家和思想領袖，進行深度的對話和分享。整個活動將是一場豐富多元的
                Web3 探索之旅，我們期待你的參與！
              </div>
              <div className="h-12">
                <LinearButton color="green">報名</LinearButton>
              </div>
            </div>
            <div className="flex h-full w-[4%] justify-center">
              <div className="h-full w-[2px] bg-line" />
            </div>
            <div className="flex w-[48%] justify-center py-4">
              <img src={Title.src} alt="" width="550" height="100" />
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
