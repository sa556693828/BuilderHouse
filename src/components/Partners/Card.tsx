import Image from "next/image";
import React, { useEffect } from "react";

//grid-cols-1
//grid-cols-2
//grid-cols-3
//grid-cols-4

export default function PartnersCard(props: {
  logo: { pic: string; w?: any; link: string }[];
  type: string;
  grid?: string;
}) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex w-4/5 flex-col items-center justify-center gap-8 rounded-[2rem] bg-partners px-20 py-12 shadow-greenLi">
      <div className="text-[2rem] font-bold">{props.type}</div>
      {props.grid ? (
        <div className={`grid grid-cols-${props.grid} gap-10`}>
          {props.logo.map((item, index) => {
            return (
              <div
                key={index}
                className="z-50 flex w-full items-center justify-center"
              >
                <Image
                  alt="logo"
                  src={item.pic}
                  width={item.w ? Number(item.w) : 280}
                  height={item.w ? Number(item.w) : 280}
                  onClick={item.link ? () => openLink(item.link) : () => {}}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="z-50 flex w-full items-center justify-center gap-10">
          {props.logo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-center"
              >
                <Image
                  alt="logo"
                  src={item.pic}
                  width={item.w ? item.w : "280"}
                  height={"280"}
                  onClick={item.link ? () => openLink(item.link) : () => {}}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
