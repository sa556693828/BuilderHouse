import React from "react";
import LinearButton from "../LinearButton/LinearButton";

//border-green
//border-blue
//border-yellow
//shadow-green
//shadow-blue
//shadow-yellow

export default function ViewCard(props: { title: string; content: string }) {
  return (
    <div className="h-full bg-gradient-to-r from-greenF to-greenT pb-[1px] transition-all">
      <div className="flex h-full w-full flex-col gap-14 bg-[#1E1E1E] p-5 shadow-greenLi xl:p-10">
        <div className="text-3xl">{props.title}</div>
        <div className="flex-1 whitespace-pre-wrap">{props.content}</div>
        <div className="">
          <LinearButton color="green">詳情</LinearButton>
        </div>
      </div>
    </div>
  );
}
