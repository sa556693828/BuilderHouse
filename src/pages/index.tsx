import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Activity from "@/components/Activity/Activity";
import TimeLine from "@/components/TimeLine/TimeLine";
import GemHunter from "@/components/GemHunter/GemHunter";
import prizeData from "@/Document/Prize";
import OverViewData from "@/Document/OverView";
import hunterData from "@/Document/GemHunter";
import ActivityData from "@/Document/Activity";
import partnersData from "@/Document/Partners";
import FAQData from "@/Document/FAQ";
import Events from "@/components/Events/Events";
import EventsData from "@/Document/Events";
import timeLineData from "@/Document/TimeLine";

export default function Home() {
  return (
    <>
      <Main />
      <TimeLine data={timeLineData} />
      <OverView data={OverViewData} />
      <Prizes data={prizeData} />
      <GemHunter data={hunterData} />
      <Activity data={ActivityData} />
      <Judges />
      <Events data={EventsData} />
      <Partners data={partnersData} />
      <FAQ data={FAQData} />
    </>
  );
}
