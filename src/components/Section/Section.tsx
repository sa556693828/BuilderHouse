import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  title: { title: string; color: "red" | "green" | "blue" };
  subTitle: string;
  id?: string;
}) {
  return (
    <div
      className="flex h-full w-full flex-col items-center gap-16 px-5 py-28 transition-all duration-300 lg:px-32 lg:py-32"
      id={props.id}
    >
      <div className="flex w-full flex-col items-center justify-start text-center lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 lg:items-center lg:justify-center lg:gap-10">
          <div
            className={`bg-gradient-to-r from-${props?.title.color}F to-${props?.title.color}T bg-clip-text text-[4rem] font-bold uppercase text-transparent`}
          >
            {props.title.title}
          </div>
          <div className="pl-2 text-center text-4xl font-extrabold">
            {props.subTitle}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
