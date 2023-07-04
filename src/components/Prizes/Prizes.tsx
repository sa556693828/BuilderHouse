import React from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";
import title from "@/assets/prizes.svg";
import style from "@/assets/dotThree.svg";
import Filecoin from "@/assets/Prizes/Filecoin.svg";
import Lead from "@/assets/Prizes/Lead.png";
import Wormhole from "@/assets/Prizes/wormhole.png";
import bingX from "@/assets/Prizes/bingX.png";
import bingxVe from "@/assets/Prizes/bingxVe.png";
import huobi from "@/assets/Prizes/huobi.png";
import chaintimes from "@/assets/Prizes/chaintimes.png";
import Orderly from "@/assets/Prizes/Orderly.svg";

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
          title="Orderly"
          prize="$10,000"
          pic={{ pic: Orderly.src, w: "50" }}
        />
        <PrizesCard
          title="Lead Capital"
          prize="$5,000"
          pic={{ pic: Lead.src, w: "50" }}
        />
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
          title="bingX Ventures"
          prize="$ -"
          pic={{ pic: bingxVe.src, w: "50" }}
        />
        <PrizesCard
          title="bingX"
          prize="$ -"
          pic={{ pic: bingX.src, w: "50" }}
        />
        <PrizesCard
          title="Huobi Ventures"
          prize="$ -"
          pic={{ pic: huobi.src, w: "50" }}
        />
        <PrizesCard
          title="Chaintimes ventures"
          prize="$ -"
          pic={{ pic: chaintimes.src, w: "50" }}
        />
      </div>
    </Section>
  );
}
