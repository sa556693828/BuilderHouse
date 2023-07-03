import Image from "next/image";
import React from "react";

export default function PartnersCard(props: {
  avatar: string;
  name?: string;
  w?: any;
}) {
  const { w = "280" } = props;
  return (
    <div className="flex h-52 w-full items-center justify-center">
      <Image src={props.avatar} width={w} height="200" alt="avatar" />
    </div>
  );
}
