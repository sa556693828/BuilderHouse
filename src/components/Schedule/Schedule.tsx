import React from "react";
import Section from "../Section/Section";
import TaskCard from "./Card";
import title from "@/assets/Schedule.svg";
import style from "@/assets/ScheduleStyle.svg";

export default function Schedule() {
  return (
    <Section
      title={{ pic: title.src, w: "590" }}
      subTitle="活動日程"
      id="Schedule"
      style={{ pic: style.src, w: "90" }}
    >
      <div className="w-full">
        <TaskCard
          name="LeadUp The Night"
          content={`- 介紹\n- 過往活動紀錄\n- 未來活動\n- 報名`}
          date="8 月 1 日 ---- 8 月 15 日"
          color="green"
        />
        <TaskCard
          name="BootCamp"
          content={`- Blockchain 基礎知識\n- Dapp 開發\n- 量化交易策略開發\n- NFT 專案開發`}
          date="8 月 1 日 ---- 8 月 15 日"
          color="red"
        />
        <TaskCard
          name="Carnival"
          content={`- 教育區域\n- NFT 展覽\n- DAO 區域\n- 黑客松 Demoday 區域\n- Panel 區域`}
          date="8 月 1 日 ---- 8 月 15 日"
          color="blue"
        />
      </div>
    </Section>
  );
}
