import React from "react";

//from-greenF to-greenT
//from-blueF to-blueT
//from-redF to-redT

export default function LinearButton(props: {
  color: "green" | "blue" | "red";
  borderClass?: any;
  contentClass?: any;
  children: any;
}) {
  const { contentClass = "py-3", borderClass = "w-52" } = props;
  return (
    <div
      className={`h-full bg-gradient-to-r from-${props?.color}F to-${props?.color}T p-[3px] transition-all ${borderClass}`}
    >
      <button
        className={`h-full w-full bg-bg text-base font-medium text-text flex items-center justify-center ${contentClass}`}
      >
        {props.children}
      </button>
    </div>
  );
}
