import React from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import Taiwan from "@/assets/Taiwan.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Sphere from "@/assets/Sphere.png";
import Vector from "@/assets/Vector.svg";
import Title from "@/assets/Title.svg";
// -top-[26px]
export default function Main() {
  return (
    <Box className="relative flex flex-col items-center overflow-hidden h-[100vh]">
      <div className="absolute top-44 right-32">
        <img src={Sphere.src} alt="" width="600" height="600" />
      </div>
      <Header />
      <div className="py-16 px-28 w-full flex flex-col h-full">
        <div className="flex w-full justify-start gap-11 items-end">
          <img src={Taiwan.src} alt="" width="400" />
          <img src={dotT.src} alt="" width="70" height="50" />
        </div>
        <div className="flex flex-col w-full justify-center mt-7 border-line border-y-2 relative h-full">
          <div className="absolute -top-[26px] right-1/4">
            <img src={Vector.src} alt="" width="50" height="50" />
          </div>
          <div className="flex h-3/5 w-full justify-end items-end">
            <div className="w-2/5" />
            <div className="w-1/5 h-full flex justify-center">
              <div className="w-[2px] h-[110%] bg-line" />
            </div>
            <div className="w-2/5 flex justify-end pb-10 pr-12">
              <img src={dotThree.src} alt="" width="100" height="100" />
            </div>
          </div>
          <div className="border-b-2 border-line w-full flex justify-center items-end relative">
            <div className="-mb-[26px] pr-[1px]">
              <img src={Vector.src} alt="" width="50" height="50" />
            </div>
            {/* <div className="absolute -top-[24px] left-[48%]"></div> */}
            <div className="absolute -bottom-[26px] -left-4">
              <img src={Vector.src} alt="" width="50" height="50" />
            </div>
          </div>
          <div className="flex h-1/2 w-full items-center">
            <div className="w-[48%] flex flex-col items-start gap-5 px-6">
              <div className="text-base font-normal uppercase">
                程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
                day）、駭客節（hackfest）或程式設計節（codefest），
                是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。
              </div>
              <button className="w-52 bg-bg p-3 text-base font-medium text-text transition-all border-[3px]">
                報名
              </button>
            </div>
            <div className="w-[4%] h-full flex justify-center">
              <div className="w-[2px] h-full bg-line" />
            </div>
            <div className="w-[48%] py-4 flex justify-center">
              <img src={Title.src} alt="" width="550" height="100" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative my-9 flex w-4/5 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-yellow p-6 pb-10 text-center  text-lg">
 
        <button className="absolute -bottom-10 w-52 rounded-full border-8 border-bg bg-white p-3 text-lg font-semibold text-black transition-all hover:bg-gray-300">
          報名
        </button>
      </div> */}
    </Box>
  );
}
