import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Image from "next/image";
import LinearButton from "../LinearButton/LinearButton";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
}) {
  return (
    <div className="h-full bg-gradient-to-r from-greenF to-greenT pb-[1px] transition-all">
      <div className="flex flex-col items-center p-10 w-full shadow-greenLi h-full bg-bg">
        <Image src={props.avatar} alt="avatar" width="120" height="120" />
        <div className="mt-5 text-center text-lg">
          {props.name}
          <div className="font-medium text-text">{props.company}</div>
        </div>
        <div className="flex w-2/3 justify-center gap-6 py-10">
          <div className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20">
            <SvgIcon width={30} height={30} iconName="icon-twitter" />
          </div>
          <div className="rounded-full p-3">
            <SvgIcon width={30} height={30} iconName="icon-discord" />
          </div>
          <div className="rounded-full p-3">
            <SvgIcon width={30} height={30} iconName="icon-telegram" />
          </div>
        </div>
      </div>
    </div>
  );
}
