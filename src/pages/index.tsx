import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Activity from "@/components/Activity/Activity";
import TimeLine from "@/components/TimeLine/TimeLine";
import GemHunter from "@/components/GemHunter/GemHunter";
import prizeDoc from "@/Document/Prize";
import OverViewDoc from "@/Document/OverView";
import hunterDoc from "@/Document/GemHunter";
import ActivityDoc from "@/Document/Activity";
import partnersData from "@/Document/Partners";
import FAQDoc from "@/Document/FAQ";
import Events from "@/components/Events/Events";
import EventsData from "@/Document/Events";
import timeLineDoc from "@/Document/TimeLine";
import Agenda from "@/components/Agenda/Agenda";
import AgendaData from "@/Document/Agenda";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "home",
      "common",
      "main",
      "activity",
      "timeLine",
      "overView",
      "prize",
      "hunter",
      "FAQ",
    ])),
  },
});

export default function Home() {
  const timeLineData = timeLineDoc();
  const OverViewData = OverViewDoc();
  const ActivityData = ActivityDoc();
  const prizeData = prizeDoc();
  const hunterData = hunterDoc();
  const FAQData = FAQDoc();

  return (
    <>
      <Main />
      <TimeLine data={timeLineData} />
      <OverView data={OverViewData} />
      <Prizes data={prizeData} />
      <GemHunter data={hunterData} />
      <Activity data={ActivityData} />
      <Judges />
      <Agenda data={AgendaData} />
      <Events data={EventsData} />
      <Partners data={partnersData} />
      <FAQ data={FAQData} />
    </>
  );
}
