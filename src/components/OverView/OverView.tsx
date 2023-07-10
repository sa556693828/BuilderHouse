import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";

export default function OverView(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {data.data.map((item: any, index: number) => (
          <ViewCard
            title={item.title}
            color={item.color}
            content={item.content}
            detail={item.detail}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
}
