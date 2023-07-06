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
          content={`Hacker 是那些展現出出色技術創新和解決方案的參與者。他們通過提交優秀的項目來表達他們的技術才華和創新思維。如果他們的項目在活動中獲得了好評，並且被認為有潛力，他們可以獲得獎勵且可能獲得孵化的機會，以進一步發展和完善他們的項目。`}
        />
        <ViewCard
          title="TRADER"
          color="red"
          content={`在這個活動中，Trader 涉及市場分析、量化策略或高頻策略。如果他們的策略被認為具有實現價值，並且在大會上獲得了好評，他們可以獲得獎勵且可能獲得孵化的機會。`}
        />
        <ViewCard
          title="GEM HUNTER"
          color="blue"
          content={`在這個活動中 Gem Hunter 是與會者也是社群基石，Gem Hunter 必須尋找和收集"寶石"（或許是活動中的線索，代幣或其他象徵物）。這些 Gem Hunter 完成挑戰和任務，搜集一定數量的寶石，可以獲得大會的特殊權益。這些權益包括：\n\nAfter Party 門票：集滿特定數量的寶石，Gem Hunter 可以獲得進入專屬的 After Party 的門票。\n\n獨家活動參與：完成某些任務的 Gem Hunter 可能被邀請參加限定的獨家活動或工作坊。\n\n紀念品或商品：集滿寶石的 Gem Hunter 可能獲得大會的限定紀念品或者商品。`}
        />
      </div>
    </Section>
  );
}
