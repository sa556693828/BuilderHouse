import React from "react";
import inch from "@/assets/Prizes/1inch.png";
import Image from "next/image";

export default function PrizesCard(props: {
  title: string;
  content: string;
  pic: any;
}) {
  return (
    <div className="h-full bg-gradient-to-r from-redF to-redT p-[2px] transition-all">
      <div
        className={`flex h-full w-full items-center gap-6 bg-bg p-4 md:gap-2`}
      >
        <Image
          src={props.pic?.pic}
          width={props.pic?.w}
          height="60"
          alt="avatar"
        />
        <div className="flex flex-col">
          <div className="text-lg">{props.title}</div>
          <div className="text-md font-normal">{props.content}</div>
        </div>
      </div>
    </div>
  );
}
