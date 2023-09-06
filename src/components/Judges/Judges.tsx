import { Image } from "@chakra-ui/react";
import React from "react";
import Section from "../Section/Section";
import ProfileCard from "./ProfileCard";
import textileD from "@/assets/gif/test.gif";

export default function Judges(props: { data: any }) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="grid w-4/5 grid-cols-1 gap-5 px-10 lg:grid-cols-3 lg:px-0">
        {/* <div className="flex w-full flex-col justify-center gap-5 px-0 lg:flex-row"> */}
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
      <Image src={textileD.src} alt="bigTextile" height="1vh" width="auto" />
    </Section>
  );
}
