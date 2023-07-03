import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";
import title from "@/assets/Overview.svg";
import style from "@/assets/OverViewStyle.svg";

export default function OverView() {
  return (
    <Section
      title={{ pic: title.src, w: "570" }}
      subTitle="總覽"
      id="OverView"
      style={{ pic: style.src, w: "200" }}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        <ViewCard
          title="報名 / 初始提案"
          content={`請填寫 Taiwan Builder House 報名表格，並透過報名確認郵件中的邀請，加入 TBH 的工作區，以進行比賽協調以及相關的溝通和更新。\n\n參與者可以以專案或尋找團隊的個人身分註冊，但只有專案才有資格被列入入圍團隊。尋找團隊的個人可以在組建或加入團隊後，更新他們現有的註冊或創建新的團隊註冊。\n\n選擇心儀題目，並根據要求於 8 月 1 日前繳交初始提案，提案模式可以是 Deck、Prototype、MVP。`}
          date="7 月 1 日 ---- 7 月 31 日"
        />
        <ViewCard
          title="入圍"
          date="8 月 1 日 ---- 8 月 15 日"
          content={`入圍的專案是由 BuilderDAO、合作夥伴和支持者選出的評審委員會根據預設的評分標準，從已註冊的專案中選出。\n\n專案將根據多項標準進行評估，包括概念、技術實施、產品設計、創新使用特性等。`}
        />
        <ViewCard
          title="Demo day"
          date="9 月 2 日"
          content={`入圍的團隊可以親自參加在 Taiwan Builder House 的展示日，或是透過視訊會議線上參加。\n\n每個團隊將被給予 10 - 15 分鐘的展示時間。團隊可以自由分配時間，但建議留出一兩分鐘供觀眾和評審團提問。\n\n結果將在線上和親自展示環節結束後的同一天公布。`}
        />
      </div>
    </Section>
  );
}
