import builder from "@/assets/Partners/builder.svg";
import carry from "@/assets/Partners/carry.svg";
import lead from "@/assets/Partners/lead.svg";
import zombie from "@/assets/Partners/zombie.svg";
import TBW from "@/assets/Partners/TBW.svg";
import wormhole from "@/assets/Partners/wormhole.svg";
import chain from "@/assets/Partners/chain.svg";
import FileCoin from "@/assets/Partners/FileCoin.svg";
import Huobi from "@/assets/Partners/Huobi.svg";
import BingX from "@/assets/Partners/BingX.svg";
import ikala from "@/assets/Partners/ikala.svg";
import Orderly from "@/assets/Partners/Orderly.svg";
import IPFS from "@/assets/Partners/IPFS.png";
import venture from "@/assets/Partners/venture.svg";
import noneland from "@/assets/Partners/noneland.svg";
import PAnews from "@/assets/Partners/PANews.svg";
import followIn from "@/assets/Partners/followIn.svg";
import ABM from "@/assets/Partners/ABM.svg";
import buzhidao from "@/assets/Partners/buzhidao.png";
import Jclub from "@/assets/Partners/Jclub.png";
import rabbit from "@/assets/Partners/rabbit.png";
import Mexc from "@/assets/Partners/mexc_global.png";
import Grenade from "@/assets/Partners/grenadelogo.png";
import ACE from "@/assets/Partners/acelogo.png";
import Gash from "@/assets/Partners/GASH.png";


//連結放上去就可以點了
const hostArr = [
  { pic: builder.src, link: "https://twitter.com/_BuilderDAO" },
];
const coHostArr = [
  { pic: lead.src, link: "https://lead-capital.com/" },
  { pic: carry.src, link: "https://www.carry.live/", w: "200" },
  { pic: zombie.src, link: "https://zombit.info/" },
];
const strategicArr = [{ pic: TBW.src, link: "", w: "220" }];
const partnersArr = [
  { pic: wormhole.src, link: "https://wormhole.com/" },
  { pic: chain.src, link: "https://ctcap.io/" },
  { pic: FileCoin.src, link: "https://filecoin.io/zh-cn/", w: "250" },
  { pic: Gash.src, link: "https://twitter.com/GASH_tw" , w: "150"},
  { pic: Huobi.src, link: "https://www.huobi.com/en-us/huobiventures" },
  { pic: BingX.src, link: "https://bingx.com/", w: "200" },
  { pic: ikala.src, link: "" },
  { pic: IPFS.src, link: "https://ipfs.tech/", w: "200" },
  { pic: venture.src, link: "" },
  { pic: Orderly.src, link: "https://orderly.network/", w: "300" },
  { pic: Mexc.src, link: "https://www.mexc.com/zh-TW", w: "100" },
  { pic: ACE.src, link: "https://ace.io/", w: "100" },
];
const mediaArr = [
  { pic: followIn.src, link: "https://followin.io/zh-Hant" },
  { pic: noneland.src, link: "https://none.land/" },
  { pic: ABM.src, link: "https://abmedia.io/" },
  { pic: PAnews.src, link: "https://www.panewslab.com/" },
  { pic: Grenade.src, link: "" },
];
const communityArr = [
  { pic: buzhidao.src, link: "" },
  { pic: Jclub.src, link: "" },
  {
    pic: rabbit.src,
    link: "",
    w: "300",
  },
];

const partnersData = {
  title: "partners",
  subTitle: "合作夥伴",
  id: "Partners",
  host: hostArr,
  coHost: coHostArr,
  strategic: strategicArr,
  partners: partnersArr,
  media: mediaArr,
  community: communityArr,
  totalPrize: "$ 19,000",
};
export default partnersData;
