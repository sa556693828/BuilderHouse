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

const hostArr = [{ pic: builder.src }];
const coHostArr = [
  { pic: lead.src },
  { pic: carry.src, w: "200" },
  { pic: zombie.src },
];
const strategicArr = [{ pic: TBW.src, w: "220" }];
const partnersArr = [
  { pic: wormhole.src },
  { pic: chain.src },
  { pic: FileCoin.src, w: "250" },
  { pic: Huobi.src },
  { pic: BingX.src, w: "200" },
  { pic: ikala.src },
  { pic: IPFS.src, w: "200" },
  { pic: venture.src },
  { pic: Orderly.src, w: "300" },
  { pic: Mexc.src, w: "100" },
];
const mediaArr = [
  { pic: followIn.src },
  { pic: noneland.src },
  { pic: ABM.src },
  { pic: PAnews.src },
  { pic: Grenade.src },
];
const communityArr = [
  { pic: buzhidao.src },
  { pic: Jclub.src },
  { pic: rabbit.src, w: "300" },
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