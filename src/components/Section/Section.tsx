import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  title: { pic: string; w: string };
  subTitle: string;
  style: { pic: string; w: string };
  id?: string;
}) {
  return (
    <div
      className="flex h-full flex-col items-center py-10 gap-16 w-full px-32"
      id={props.id}
    >
      <div className="flex w-full flex-col items-start justify-center lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-end justify-center">
          <img
            src={props.title?.pic}
            alt=""
            width={props.title?.w}
            height="100"
          />
          <div className="text-4xl font-extrabold pl-6">{props.subTitle}</div>
        </div>
        <img
          src={props.style?.pic}
          alt=""
          width={props.style?.w}
          height="100"
        />
      </div>
      {props.children}
    </div>
  );
}
