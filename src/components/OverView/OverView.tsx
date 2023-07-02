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
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around gap-5">
        <ViewCard
          title="LeadUp The Night"
          content={`- 介紹\n- 過往活動紀錄\n- 未來活動\n- 報名`}
        />
        <ViewCard
          title="Carnival"
          content={`- 教育區域\n- NFT 展覽\n- DAO 區域\n- 黑客松 Demoday 區域\n- Panel 區域`}
        />
        <ViewCard
          title="BootCamp"
          content={`- Blockchain 基礎知識\n- Dapp 開發\n- 量化交易策略開發\n- NFT 專案開發`}
        />
      </div>
    </Section>
  );
}
