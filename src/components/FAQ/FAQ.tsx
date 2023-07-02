import React from "react";
import title from "@/assets/FAQ.svg";
import style from "@/assets/PartnersStyle.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

export default function FAQ() {
  return (
    <>
      <Box
        className="flex flex-col items-center justify-between bg-gradient-to-r from-[#4285F4] to-[#9747FF] gap-32"
        id="FAQ"
      >
        <div className="flex items-center justify-between pt-28 pb-14 gap-16">
          <div className="w-2/5 flex justify-end">
            <img src={title.src} alt="" width="400" height="100" />
          </div>
          <div className="flex flex-col w-3/5 px-10 gap-16">
            <div className="max-w-xl">
              程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
              day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。
            </div>
            <button className="w-52 bg-transparent p-3 text-base font-medium transition-all border-[3px]">
              詳情
            </button>
          </div>
        </div>
        <Footer />
      </Box>
    </>
  );
}
