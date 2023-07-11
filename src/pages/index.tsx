import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Activity from "@/components/Activity/Activity";
import TimeLine from "@/components/TimeLine/TimeLine";
import GemHunter from "@/components/GemHunter/GemHunter";
import prizeData from "@/components/Document/Prize";
import OverViewData from "@/components/Document/OverView";
import hunterData from "@/components/Document/GemHunter";
import ActivityData from "@/components/Document/Activity";
import partnersData from "@/components/Document/Partners";
import FAQData from "@/components/Document/FAQ";

export default function Home() {
  return (
    <>
      <Main />
      <TimeLine />
      <OverView data={OverViewData} />
      <Prizes data={prizeData} />
      <GemHunter data={hunterData} />
      <Activity data={ActivityData} />
      <Judges />
      <Partners data={partnersData} />
      <FAQ data={FAQData} />
    </>
  );
}
