import React from "react";
import Section from "../Section/Section";
import TaskCard from "./Card";

export default function Activity(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {data.data.map((item: any, index: number) => (
          <TaskCard
            title={item.title}
            color={item.color}
            content={item.content}
            date={item.date}
            detail={item.detail}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
}
