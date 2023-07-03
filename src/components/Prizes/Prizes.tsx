import React from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";
import title from "@/assets/prizes.svg";
import style from "@/assets/dotThree.svg";
import Filecoin from "@/assets/Prizes/Filecoin.svg";
import Lead from "@/assets/Prizes/Lead.png";
import Wormhole from "@/assets/Prizes/wormhole.png";

export default function Prizes() {
  return (
    <Section
      title={{ pic: title.src, w: "405" }}
      subTitle="獎金"
      id="Prizes"
      style={{ pic: style.src, w: "90" }}
    >
      <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
        <PrizesCard
          title="Wormhole"
          prize="$2,000"
          pic={{ pic: Wormhole.src, w: "50" }}
        />
        <PrizesCard
          title="FileCoin"
          prize="$2,000"
          pic={{ pic: Filecoin.src, w: "50" }}
        />
        <PrizesCard
          title="Lead Capital"
          prize="$5,000"
          pic={{ pic: Lead.src, w: "45" }}
        />
      </div>
    </Section>
  );
}
