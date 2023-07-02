import React from "react";
import inch from "@/assets/Prizes/1inch.png";
import Image from "next/image";

export default function PrizesCard(props: { title: string; content: string }) {
  return (
    <div className="h-full bg-gradient-to-r from-redF to-redT p-[2px] transition-all">
      <div className={`flex gap-2 h-full w-full p-4 items-center bg-bg`}>
        <Image src={inch.src} width="64" height="64" alt="avatar" />
        <div className="flex flex-col">
          <div className="text-lg">{props.title}</div>
          <div className="text-md font-normal">{props.content}</div>
        </div>
      </div>
    </div>
  );
}
