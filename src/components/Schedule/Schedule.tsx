import React from "react";
import Section from "../Section/Section";
import TaskCard from "./Card";
import title from "@/assets/Schedule.svg";
import style from "@/assets/ScheduleStyle.svg";

export default function Schedule() {
  return (
    <Section
      title={{ pic: title.src, w: "590" }}
      subTitle="活動日程"
      id="Schedule"
      style={{ pic: style.src, w: "90" }}
    >
      <div className="">
        <TaskCard
          name="訓練營"
          content="程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。"
          color="green"
        />
        <TaskCard
          name="黑客松"
          content="程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。"
          color="red"
        />
        <TaskCard
          name="孵化器"
          content="程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。"
          color="blue"
        />
      </div>
    </Section>
  );
}
