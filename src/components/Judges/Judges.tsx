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
      linkin: "https://twitter.com/protocollabs",
    },
    {
      name: "Henry",
      company: "Meta\nGSR Sales Director",
      avatar: henry.src,
      linkin: "https://twitter.com/protocollabs",
    },
    {
      name: "Michael",
      company: "Lead Capital\nCo-Founder",
      avatar: michael.src,
      linkin: "https://twitter.com/protocollabs",
    },
  ];
  return (
    <Section
      title={{ title: "judges", color: "red" }}
      subTitle="裁判群"
      id="Judges"
    >
      {/* <div className="grid w-full grid-cols-1 gap-5 px-10 lg:grid-cols-4 lg:px-0"> */}
      <div className="flex w-full flex-col justify-center gap-5 px-0 lg:flex-row">
        {JudgesArray.map((item, idx) => (
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
