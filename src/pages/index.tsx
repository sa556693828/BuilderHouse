import FAQ from "@/components/FAQ/FAQ";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Schedule from "@/components/Schedule/Schedule";
import TimeLine from "@/components/TimeLine/TimeLine";

export default function Home() {
  return (
    <>
      <Main />
      <TimeLine />
      <OverView />
      <Prizes />
      <Schedule />
      <Judges />
      <Partners />
      <FAQ />
    </>
  );
}
