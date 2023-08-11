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
        <div className="flex w-full border-b pb-10">
          <div className="w-2/5">
            <div className="text-center">TIME</div>
          </div>
          <div className="w-3/5">
            <div className="text-center">TOPIC</div>
          </div>
        </div>
        {data.data?.map((data: any, index: any) => (
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
                data.subTitle.map((sub: any, index: any) => (
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
