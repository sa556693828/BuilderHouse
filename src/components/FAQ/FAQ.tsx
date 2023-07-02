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
        className="flex flex-col items-center justify-between gap-32 bg-gradient-to-r from-[#4285F4] to-[#9747FF]"
        id="FAQ"
      >
        <div className="flex items-center justify-between gap-16 pb-14 pt-28">
          <div className="flex w-2/5 justify-end">
            <img src={title.src} alt="" width="400" height="100" />
          </div>
          <div className="flex w-3/5 flex-col gap-16 px-10">
            <div className="max-w-xl">Continue...</div>
            {/* <button className="w-52 border-[3px] bg-transparent p-3 text-base font-medium transition-all">
              詳情
            </button> */}
          </div>
        </div>
        <Footer />
      </Box>
    </>
  );
}
