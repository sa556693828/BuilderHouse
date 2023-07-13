import React from "react";
import timeLine from "@/assets/TimeLine.svg";
import sideBg from "@/assets/sideBg.svg";
import sss from "@/assets/sss.svg";
import line from "@/assets/line.svg";
import sideBgT from "@/assets/sideBgT.svg";

export default function TimeLine() {
  const first = {
    title: `報名 / 初始提案`,
    date: `2023-07-01 至 2023-08-25`,
    content: `請填寫 Taiwan Builder House 報名表格，並透過報名確認郵件中的邀請，加入 TBH 的工作區，以進行比賽協調以及相關的溝通和更新。\n\n參與者可以以專案或尋找團隊的個人身分註冊，但只有專案才有資格被列入入圍團隊。尋找團隊的個人可以在組建或加入團隊後，更新他們現有的註冊或創建新的團隊註冊。\n\n選擇心儀題目，並根據要求於 8 月 1 日前繳交初始提案，提案模式可以是 Deck、Prototype、MVP。`,
  };
  const second = {
    title: `評審及導師時間`,
    date: `2023-08-01 至 2023-08-25`,
    content: `請填寫 Taiwan Builder House 報名表入圍的專案是由 BuilderDAO、合作夥伴和支持者選出的評審委員會根據預設的評分標準，從已註冊的專案中選出。\n\n專案將根據多項標準進行評估，包括概念、技術實施、產品設計、創新使用特性等。`,
  };
  const third = {
    title: `DEMO DAY`,
    date: `2023-08-31`,
    content: `入圍的團隊可以親自參加在 Taiwan Builder House 的展示日，或是透過視訊會議線上參加。\n\n每個團隊將被給予 10 - 15 分鐘的展示時間。團隊可以自由分配時間，但建議留出一兩分鐘供觀眾和評審團提問。\n\n結果將在線上和親自展示環節結束後的同一天公布。`,
  };
  return (
    <>
      <img src={sideBgT.src} alt="TimeLine" className="w-full" />
      <div className="h-full w-full px-5 py-12 lg:px-16">
        <div className="hidden h-full w-full flex-col items-center justify-center gap-10 whitespace-pre-wrap lg:flex">
          <div className="title flex w-4/5 lg:gap-24 2xl:gap-12">
            <div className="w-1/3 text-2xl">
              {first.title}
              <div className="pt-2 text-base text-text">{first.date}</div>
            </div>
            <div className="w-1/3 text-2xl">
              {second.title}
              <div className="pt-2 text-base text-text">{second.date}</div>
            </div>
            <div className="w-1/3 text-2xl">
              {third.title}
              <div className="pt-2 text-base text-text">{third.date}</div>
            </div>
          </div>
          <div className="line relative flex w-4/5 lg:gap-24 2xl:gap-12">
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                1
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                2
              </div>
            </div>
            <div className="z-10 w-1/3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                3
              </div>
            </div>
            <div className="absolute top-1/2 w-full">
              <img src={line.src} width="100%" height="2px" />
            </div>
          </div>
          <div className="content flex w-4/5 text-sm text-text lg:gap-24 2xl:gap-12">
            <div className="w-1/3">
              <div className=" max-w-xs">{first.content}</div>
            </div>
            <div className="w-1/3">
              <div className=" max-w-xs">{second.content}</div>
            </div>
            <div className="w-1/3">
              <div className=" max-w-xs">{third.content}</div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center gap-10 lg:hidden">
          <div className="h-full bg-gradient-to-r from-greenF to-greenT pb-[1px] transition-all lg:hidden">
            <div className="flex h-full w-full flex-col gap-14 bg-[#1E1E1E] p-5 shadow-greenLi xl:p-10">
              <div className="text-3xl">
                {first.title}
                <div className="whitespace-pre-wrap pt-2 text-lg text-text">
                  {first.date}
                </div>
              </div>
              <div className="max-w-3xl flex-1 whitespace-pre-wrap text-text">
                {first.content}
              </div>
            </div>
          </div>
          <div className="h-full bg-gradient-to-r from-greenF to-greenT pb-[1px] transition-all lg:hidden">
            <div className="flex h-full w-full flex-col gap-14 bg-[#1E1E1E] p-5 shadow-greenLi xl:p-10">
              <div className="text-3xl">
                {second.title}
                <div className="whitespace-pre-wrap pt-2 text-lg text-text">
                  {second.date}
                </div>
              </div>
              <div className="max-w-3xl flex-1 whitespace-pre-wrap text-text">
                {second.content}
              </div>
            </div>
          </div>
          <div className="h-full bg-gradient-to-r from-greenF to-greenT pb-[1px] transition-all lg:hidden">
            <div className="flex h-full w-full flex-col gap-14 bg-[#1E1E1E] p-5 shadow-greenLi xl:p-10">
              <div className="text-3xl">
                {third.title}
                <div className="whitespace-pre-wrap pt-2 text-lg text-text">
                  {third.date}
                </div>
              </div>

              <div className="max-w-3xl flex-1 whitespace-pre-wrap text-text">
                {third.content}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={sideBg.src} alt="TimeLine" className="w-full" />
    </>
  );
}
