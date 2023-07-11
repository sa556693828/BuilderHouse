import React from "react";
import LinearButton from "../LinearButton/LinearButton";
import sideBg from "@/assets/sideBg.svg";
import sideBgT from "@/assets/sideBgT.svg";
import BgG from "@/assets/Activity/BgG.svg";
import MaskG from "@/assets/Activity/MaskG.svg";
import MaskR from "@/assets/Activity/MaskR.svg";
import MaskB from "@/assets/Activity/MaskB.svg";

//border-green
//border-blue
//border-red
export default function TaskCard(props: {
  title: string;
  content: string;
  date: string;
  color: "green" | "blue" | "red";
  detail: string;
  link?: string;
}) {
  const chooseColor = () => {
    switch (props?.color) {
      case "green":
        return (
          <img
            src={MaskG.src}
            className={`absolute left-1 top-1 z-20 w-[99%]`}
          />
        );
      case "blue":
        return (
          <img
            src={MaskB.src}
            className={`absolute left-1 top-1 z-20 w-[99%]`}
          />
        );
      case "red":
        return (
          <img
            src={MaskR.src}
            className={`absolute left-1 top-1 z-20 w-[99%]`}
          />
        );
    }
  };
  return (
    <div
      className={`bg-gradient-to-r from-${props?.color}F to-${props?.color}T relative h-full p-[2px] transition-all`}
    >
      <img src={BgG.src} className={`absolute left-1 top-1 z-10 w-[98%]`} />
      {chooseColor()}
      <div className="flex h-full w-full flex-col gap-14 bg-[#1E1E1E] p-5 shadow-greenLi xl:p-10">
        <div className="z-30 text-[2rem] font-bold text-white">
          {props.title}
          <div className="text-lg font-medium text-text">{props.date}</div>
        </div>

        <div className="flex-1 whitespace-pre-wrap text-base">
          {props.content}
        </div>
        <div className="">
          <LinearButton color={props?.color} href={props?.link}>
            詳情
          </LinearButton>
        </div>
      </div>
    </div>
  );
}
