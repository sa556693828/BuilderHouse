import React from "react";
import Section from "../Section/Section";
import ProfileCard from "./ProfileCard";
import henry from "@/assets/Judges/henry.jpeg";
import michael from "@/assets/Judges/michael.jpg";
import damien from "@/assets/Judges/damien.jpeg";

export default function Judges() {
  const JudgesArray = [
    {
      name: "Damien",
      company: "Binance\nGlobal Partnerships",
      avatar: damien.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Henry",
      company: "Meta\nGSR Sales Director",
      avatar: henry.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Michael",
      company: "Lead Capital\nCo-Founder",
      avatar: michael.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
  ];
  return (
    <Section
      title={{ title: "judges", color: "red" }}
      subTitle="裁判群"
      id="Judges"
    >
      {/* <div className="grid w-full grid-cols-1 gap-5 px-10 lg:grid-cols-4 lg:px-0"> */}
      <div className="flex w-full flex-col justify-center gap-5 px-10 lg:flex-row lg:px-0">
        {JudgesArray.map((item, idx) => (
          <ProfileCard
            avatar={item.avatar}
            name={item.name}
            company={item.company}
            twitter={item.twitter}
            discord={item.discord}
            telegram={item.telegram}
            key={idx}
          />
        ))}
      </div>
    </Section>
  );
}
