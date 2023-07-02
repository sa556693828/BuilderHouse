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
      <div className="flex flex-col gap-14 p-10 w-full shadow-greenLi h-full bg-[#1E1E1E]">
        <div className="text-4xl">{props.title}</div>
        <div className="flex-1 py-4">
          {props.content}
          程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。在該活動當中，電腦程式設計師以及其他與軟體發展相關的人員，如圖形設計師、介面設計師與專案經理，相聚在一起，以緊密合作的形式去進行某項軟體專案。
        </div>
        <LinearButton color="green">詳情</LinearButton>
      </div>
    </div>
  );
}
