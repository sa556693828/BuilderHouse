import React from "react";
import Section from "../Section/Section";
import ProfileCard from "./ProfileCard";

export default function Judges(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      {/* <div className="grid w-full grid-cols-1 gap-5 px-10 lg:grid-cols-4 lg:px-0"> */}
      <div className="flex w-full flex-col justify-center gap-5 px-0 lg:flex-row">
        {data.data.map((item: any, idx: any) => (
          <ProfileCard
            avatar={item.avatar}
            name={item.name}
            company={item.company}
            linkin={item.linkin}
            key={idx}
          />
        ))}
      </div>
    </Section>
  );
}
