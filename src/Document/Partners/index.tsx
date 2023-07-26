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
import Binance from "@/assets/Partners/Binance.png";
import Abga from "@/assets/Partners/abga.png";
import Gen3 from "@/assets/Partners/gen3.png";
import Han from "@/assets/Partners/han.png";
import Cardano from "@/assets/Partners/Cardano_logo.png";
import Tezos from "@/assets/Partners/tezos_logo.svg";
import Tzapac from "@/assets/Partners/tzapac_logo.svg";



//連結放上去就可以點了
const hostArr = [{ pic: builder.src, link: "https://twitter.com/_BuilderDAO" }];
const coHostArr = [
  { pic: lead.src, link: "https://lead-capital.com/" },
  { pic: carry.src, link: "https://www.carry.live/", w: "200" },
  { pic: zombie.src, link: "https://zombit.info/" },
];
const strategicArr = [
  { pic: TBW.src, link: "https://www.taipeiblockchainweek.com/", w: "220" },
  { pic: Abga.src, link: "https://www.abga.asia/", w: "220" },
  { pic: Gen3.src, link: "https://gen3.network/", w: "220" },
];
const partnersArr = [
  { pic: wormhole.src, link: "https://wormhole.com/" },
  { pic: Binance.src, link: "https://binance.com/" },
  { pic: Orderly.src, link: "https://orderly.network/", w: "300" },
  { pic: Tezos.src, link: "https://tezos.com/", w: "300" },
  { pic: Tzapac.src, link: "hhttps://www.tzapac.com/", w: "300" },
  { pic: chain.src, link: "https://ctcap.io/", w: "200" },
  { pic: FileCoin.src, link: "https://filecoin.io/zh-cn/", w: "250" },
  { pic: Gash.src, link: "https://twitter.com/GASH_tw", w: "150" },
  { pic: Huobi.src, link: "https://www.huobi.com/en-us/huobiventures" },
  { pic: BingX.src, link: "https://bingx.com/", w: "150" },
  { pic: ikala.src, link: "" },
  { pic: IPFS.src, link: "https://ipfs.tech/", w: "150" },
  { pic: venture.src, link: "", w: "150" },
  { pic: Orderly.src, link: "https://orderly.network/", w: "300" },
  { pic: Mexc.src, link: "https://www.mexc.com/zh-TW", w: "100" },
  { pic: ACE.src, link: "https://ace.io/", w: "150" },
];
const gemArr = [{ pic: followIn.src, link: "https://followin.io/zh-Hant" }];
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
  { pic: Han.src, link: "" },
  { pic: Cardano.src, link: "" },
];

const partnersData = {
  title: "partners",
  subTitle: "合作夥伴",
  id: "Partners",
  host: hostArr,
  coHost: coHostArr,
  strategic: strategicArr,
  partners: partnersArr,
  gem: gemArr,
  media: mediaArr,
  community: communityArr,
  totalPrize: "$ 19,000",
};
export default partnersData;
