import React from "react";
import Section from "../Section/Section";
import { LuClock3 } from "react-icons/lu";

export default function Agenda(props: { data: any }) {
  const { data } = props;

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="flex w-4/5 flex-col">
        <div className="h-full w-full bg-gradient-to-r from-blueF to-blueT pb-[2px] transition-all">
          <div className="flex w-full bg-bg pb-10 text-2xl">
            <div className="w-1/5">
              <div className="text-center">TIME</div>
            </div>
            <div className="w-2/5">
              <div className="text-center">TOPIC</div>
            </div>
            <div className="w-2/5">
              <div className="text-center">SPEAKER</div>
            </div>
          </div>
        </div>
        {data.data?.map((data: any, index: any) => (
          <div className="flex w-full border-b py-6" key={index}>
            <div className="flex w-1/5 justify-center">
              <div className="flex items-center justify-center gap-4 font-normal">
                <LuClock3 size="22" />
                {data.time}
              </div>
            </div>
            <div className="flex w-2/5 items-center justify-center">
              <div className="text-center text-2xl font-semibold">
                {data.topic}
              </div>
            </div>
            <div className="w-2/5">
              {data.subTitle &&
                data.subTitle.map((sub: any, index: any) => (
                  <div
                    className="whitespace-pre-wrap text-center text-base font-semibold text-text"
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
