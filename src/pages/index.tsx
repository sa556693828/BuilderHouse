import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Activity from "@/components/Activity/Activity";
import TimeLine from "@/components/TimeLine/TimeLine";
import GemHunter from "@/components/GemHunter/GemHunter";

export default function Home() {
  return (
    <>
      <Main />
      <TimeLine />
      <OverView />
      {/* <TotalPrize/> */}
      <Prizes />
      <GemHunter />
      <Activity />
      <Judges />
      <Partners />
      <FAQ />
    </>
  );
}
