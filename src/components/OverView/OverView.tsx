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
        <ViewCard title="標題" content="?" />
        <ViewCard title="標題" content="?" />
        <ViewCard title="標題" content="?" />
      </div>
    </Section>
  );
}
