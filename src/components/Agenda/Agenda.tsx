import React from "react";
import Section from "../Section/Section";
import { LuClock3 } from "react-icons/lu";

export default function Agenda() {
  const agendaData = [
    { time: "09:00", topic: "Opening", subTitle: ["TBD"] },
    { time: "09:30", topic: "Panel" },
    {
      time: "09:40",
      topic: "TBD",
      subTitle: ["Host:Carlos, ACE Exchange", "Community TBD"],
    },
    { time: "09:50", topic: "Panel" },
    {
      time: "10:00",
      topic: "Taiwan Builder House Trader Demos",
      subTitle: ["Team"],
    },
    {
      time: "10:10",
      topic: "Panel",
      subTitle: [
        "Host:TBD",
        "Damien, Binance\nJosh, BingX\nMichael, Lead Capital\nHenry, Meta",
      ],
    },
    {
      time: "10:00",
      topic: "Taiwan Builder House Trader Demos",
      subTitle: ["Team"],
    },
    { time: "10:10", topic: "Panel", subTitle: ["TBD"] },
    { time: "10:10", topic: "Taiwan Builder House Result" },
  ];
  return (
    <Section
      title={{ title: "agenda", color: "blue" }}
      subTitle="議程"
      id="Agenda"
    >
      <div className="flex w-4/5 flex-col">
        <div className="flex w-full border-b pb-10">
          <div className="w-2/5">
            <div className="text-center">TIME</div>
          </div>
          <div className="w-3/5">
            <div className="text-center">TOPIC</div>
          </div>
        </div>
        {agendaData.map((data, index) => (
          <div className="flex w-full border-b py-10" key={index}>
            <div className="w-2/5 pl-20">
              <div className="flex items-center gap-4 font-normal">
                <LuClock3 size="22" />
                {data.time}
              </div>
            </div>
            <div className="w-3/5 space-y-2 pl-20">
              <div className="text-2xl font-semibold">{data.topic}</div>
              {data.subTitle &&
                data.subTitle.map((sub, index) => (
                  <div
                    className="whitespace-pre-wrap text-base font-normal text-text"
                    key={index}
                  >
                    {sub}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
