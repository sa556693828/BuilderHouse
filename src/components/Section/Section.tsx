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
      className="flex h-full w-full flex-col items-center gap-16 px-5 py-28 transition-all duration-300 lg:px-32"
      id={props.id}
    >
      <div className="flex w-full flex-col justify-start lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
          <img
            src={props.title?.pic}
            alt=""
            width={props.title?.w}
            height="100"
          />
          <div className="pl-2 text-4xl font-extrabold lg:pl-6">
            {props.subTitle}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
