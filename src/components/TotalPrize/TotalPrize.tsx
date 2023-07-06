import React from "react";
import sideBg from "@/assets/sideBg.svg";
import sss from "@/assets/sss.svg";
import sideBgT from "@/assets/sideBgT.svg";

export default function TotalPrize() {
  return (
    <>
      <img src={sideBgT.src} alt="TimeLine" className="w-full" />
      <div className="flex w-full flex-col items-center justify-center gap-10 py-32">
        <div className="text-[2rem] uppercase">Total Prize</div>
        <div className="h-32 w-4/5 rounded-2xl bg-gradient-to-r from-yellowF to-yellowT p-[2px] shadow-yellowLi transition-all">
          <div
            className={`flex h-full w-full items-center justify-center gap-6 rounded-2xl bg-bg p-4 md:gap-2`}
          >
            <div className="bg-gradient-to-r from-yellowF to-yellowT bg-clip-text text-5xl text-transparent">
              To be Continue
            </div>
          </div>
        </div>
      </div>
      <img src={sideBg.src} alt="TimeLine" className="w-full" />
    </>
  );
}
