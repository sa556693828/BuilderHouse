import { Divider } from "@chakra-ui/react";
import React from "react";
import LinearButton from "../LinearButton/LinearButton";
//border-green
//border-blue
//border-red
export default function TaskCard(props: {
  name: string;
  content: string;
  date: string;
  color: "green" | "blue" | "red";
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col items-end lg:flex-row">
        <div className="flex w-full flex-col lg:w-2/3">
          <div
            className={`flex flex-col gap-3 border-l-8 border-${props.color} mb-5 py-2 pl-4`}
          >
            <div className="text-5xl">{props.name}</div>
            <div className="text-2xl">{props.date}</div>
          </div>
          <div className="text-lg font-normal pl-6 whitespace-pre-wrap">
            {props.content}
          </div>
        </div>
        <div className="flex w-full justify-end lg:w-1/3">
          <LinearButton color={props.color}>詳情</LinearButton>
        </div>
      </div>
      <Divider py="3" />
    </div>
  );
}
