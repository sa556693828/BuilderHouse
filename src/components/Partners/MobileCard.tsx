import Image from "next/image";
import React from "react";

export default function PartnersM(props: {
  avatar: any;
  name?: string;
  title?: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-20">
      <div className="text-5xl">{props.title}</div>
      {props.avatar.map((item: any, idx: any) => (
        <Image
          src={item.pic}
          width={item.w !== "" ? item.w : "300"}
          height="200"
          alt="avatar"
        />
      ))}
    </div>
  );
}
