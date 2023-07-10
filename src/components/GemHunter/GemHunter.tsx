import React from "react";
import sideBgT from "@/assets/sideBgT.svg";
import Section from "../Section/Section";
import HunterCard from "./Card";

export default function GemHunter(props: { data: any }) {
  const { data } = props;
  return (
    <>
      <Section
        title={{ title: data.title.name, color: data.title.color }}
        subTitle={data.subTitle}
        id={data.id}
      >
        <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
          {data?.data.map((item: any, idx: any) => (
            <HunterCard
              key={idx}
              title={item.title}
              prize={item.prize}
              pic={{ pic: item.pic, w: "50" }}
              content={item.content}
            />
          ))}
        </div>
      </Section>
      <img src={sideBgT.src} alt="TimeLine" className="w-full" />
    </>
  );
}
