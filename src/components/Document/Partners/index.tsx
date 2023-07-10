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

const hostArr = [{ pic: builder.src, w: "" }];
const coHostArr = [
  { pic: lead.src, w: "" },
  { pic: carry.src, w: "200" },
  { pic: zombie.src, w: "" },
];
const strategicArr = [{ pic: TBW.src, w: "220" }];
const partnersArr = [
  { pic: wormhole.src, w: "" },
  { pic: chain.src, w: "" },
  { pic: FileCoin.src, w: "250" },
  { pic: Huobi.src, w: "" },
  { pic: BingX.src, w: "200" },
  { pic: ikala.src, w: "" },
  { pic: IPFS.src, w: "200" },
  { pic: venture.src, w: "" },
  { pic: Orderly.src, w: "300" },
];
const mediaArr = [
  { pic: noneland.src, w: "" },
  { pic: ABM.src, w: "" },
  { pic: PAnews.src, w: "" },
  { pic: followIn.src, w: "" },
];
const communityArr = [
  { pic: buzhidao.src, w: "" },
  { pic: Jclub.src, w: "" },
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
