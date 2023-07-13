import React from "react";
import { Flex } from "@chakra-ui/react";
import Taiwan from "@/assets/TaiwanM.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Vector from "@/assets/Vector.svg";
import LinearButton from "../LinearButton/LinearButton";
// -top-[26px]
export default function MainMobile() {
  return (
    <>
      <Flex
        className="h-full w-full flex-col items-center px-10 pb-4 pt-12 transition-all"
        display={{ base: "flex", lg: "none" }}
      >
        <div className="relative flex h-1/2 w-full flex-col items-start justify-end gap-4 pb-4">
          <div className="pb-6 pl-4">
            <img src={dotThree.src} alt="" width="40" height="50" />
          </div>
          <img src={Taiwan.src} alt="" className="z-20 h-2/3" />
          <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text p-2 text-2xl font-medium text-transparent">
            The Odyssey
          </div>
        </div>
        <div className="relative flex h-1/2 justify-center border-y-2 border-line py-6">
          <div className="absolute -left-2 -top-[16px]">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -top-[16px] left-44">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -bottom-[16px] right-24">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-2 px-2">
            <div className="text-base font-normal uppercase sm:text-lg">
              Taiwan Builder House (TBH)
              是一個匯集了各種Web3元素的創新社群。在這裡，你不僅可以認識來自不同領域的創建者，還可以找到志同道合的夥伴。通過
              Taiwan Builder House，你將有機會在Web3領域中開創出自己獨特的道路。
            </div>
            <div className="flex w-full items-start justify-between gap-2">
              <div className="flex h-5/6 flex-col gap-6">
                <LinearButton color="red" href="https://bit.ly/3DgPiy0">
                  Hacker/Trader 報名
                </LinearButton>
                <LinearButton color="blue" href="https://bit.ly/3pPWH4r">
                  Hunter 報名
                </LinearButton>
              </div>
              <img src={dotT.src} alt="" width="50" height="50" />
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
