import React from "react";
import Section from "../Section/Section";
import TaskCard from "./Card";
import title from "@/assets/Schedule.svg";
import style from "@/assets/ScheduleStyle.svg";

export default function Activity() {
  return (
    <Section
      title={{ title: "Activity", color: "blue" }}
      subTitle="活動日程"
      id="Activity"
      style={{ pic: style.src, w: "90" }}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        <TaskCard
          title="Odyssey"
          content={`- 教育區域\n- NFT 展覽\n- DAO 區域\n- 黑客松 Demoday 區域\n- Panel 區域`}
          date="8 月 31 日"
          color="green"
        />
        <TaskCard
          title="LeadUp The Night"
          content={`- 介紹\n- 過往活動紀錄\n- 未來活動\n- 報名`}
          date="每週三晚上"
          color="red"
        />
        <TaskCard
          title="BootCamp"
          content={`- Blockchain 基礎知識\n- Dapp 開發\n- 量化交易策略開發\n- NFT 專案開發`}
          date="7 月 - 8 月"
          color="blue"
        />
      </div>
    </Section>
  );
}
