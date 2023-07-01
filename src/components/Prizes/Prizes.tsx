import React from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";
import title from "@/assets/prizes.svg";
import style from "@/assets/dotThree.svg";

export default function Prizes() {
  return (
    <Section
      title={{ pic: title.src, w: "405" }}
      subTitle="獎金"
      id="Prizes"
      style={{ pic: style.src, w: "90" }}
    >
      <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
        <PrizesCard title="1inch Network" content="$20,000" color="blue" />
        <PrizesCard title="1inch Network" content="$20,000" color="yellow" />
        <PrizesCard title="1inch Network" content="$20,000" color="green" />
      </div>
    </Section>
  );
}
