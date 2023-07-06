import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";
import title from "@/assets/Overview.svg";
import style from "@/assets/OverViewStyle.svg";

export default function OverView() {
  return (
    <Section
      title={{ title: "OVERVIEW", color: "green" }}
      subTitle="總覽"
      id="OverView"
      style={{ pic: style.src, w: "200" }}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        <ViewCard
          title="HACKER"
          color="green"
          content={`通過提交優秀的項目來展現自己的技術才華和創新思維。如果項目在活動中獲得了好評，並且被認為有潛力，Hacker 將可以獲得獎金和孵化的機會，以進一步發展並完善項目。`}
        />
        <ViewCard
          title="TRADER"
          color="red"
          content={`包含但不限於交易工具、量化策略或高頻策略等。TBH 將提供交易比賽、量化交易工作坊、交易相關題目等機會。如果 Trader 的策略被認為具有實現價值，參賽者可以獲得獎金以及更多合作機會。`}
        />
        <ViewCard
          title="GEM HUNTER"
          color="blue"
          content={`Gem Hunter 是與會者也是社群基石，Gem Hunter 必須尋找和收集 "寶石"（或許是活動中的線索，代幣或其他象徵物）。這些 Gem Hunter 完成挑戰和任務，搜集一定數量的寶石，可以獲得大會的特殊權益。`}
        />
      </div>
    </Section>
  );
}
