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
import Ntufintech from "@/assets/Partners/NTU_Fintech_Club_logo_n.png";
import Xdao from "@/assets/Partners/X_DAO.png";
import mrbq from "@/assets/Partners/Mr_BQ.svg";
import Okx from "@/assets/Partners/OKX_Logo_white.png";
import Okxventures from "@/assets/Partners/OKX_Ventures_White.png";
import Lbank from "@/assets/Partners/lbank_gold.png";
import Onekey from "@/assets/Partners/onekey_logotype_mono_white.png";
import BCI from "@/assets/Partners/BCI.png";
import Sei from "@/assets/Partners/Sei_Logo.png";
import Solana from "@/assets/Partners/solanaLogo.svg";
import Gcp from "@/assets/Partners/lockup_GoogleCloud_Reverse_rgb_544x96px.svg";
import C2_venture from "@/assets/Partners/c2_venture.png";
import Hong from "@/assets/Partners/Hong_new.png";
import Ref from "@/assets/Partners/ref_finance.png";
import Chainlink from "@/assets/Partners/Chainlink.svg";
import Eos from "@/assets/Partners/eos.svg";
import Cathy from "@/assets/Partners/Cathay_white.png";
import BN from "@/assets/Partners/BN.png";
import term from "@/assets/Partners/Term_Structure.png";
import Appworks from "@/assets/Partners/AppWorks_logo_white.png";
import Web3 from "@/assets/Partners/WEB3.png";
import Stockfeel from "@/assets/Partners/stockfeel.png";
import Pionex from "@/assets/Partners/pionex.png";
import TBA from "@/assets/Partners/TBA.png";


//VC
import Ld from "@/assets/Partners/LD.png";
import Ac from "@/assets/Partners/ac_capital.png";
import Mexcvc from "@/assets/Partners/mexc_vc.png";
import Ngc from "@/assets/Partners/NGC_Ventures_white.png";
import Jz from "@/assets/Partners/JZ_INVEST_LOGO_white.png";

//Gem
import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Bucket from "@/assets/Hunter/bucket.png";
import Dmail from "@/assets/Hunter/dmail.png";
import Pawnfi_gem from "@/assets/Hunter/pawnfi_logo_purple.svg";
import Bonk from "@/assets/Hunter/bonk.png";
import Genopets from "@/assets/Hunter/genopets.png";
import Paraspace from "@/assets/Hunter/paraspace_logo.png";

//communtity
import Web3ass from "@/assets/Partners/web3_ass.png";
import C1 from "@/assets/Partners/c1.png";
import C2 from "@/assets/Partners/c2_w.png";
import C3 from "@/assets/Partners/c3_n.png";
import C4 from "@/assets/Partners/c4.png";
import C5 from "@/assets/Partners/c5.png";
import C6 from "@/assets/Partners/c6.png";
import C7 from "@/assets/Partners/c7_w.png";
import ISC2 from "@/assets/Partners/ISC2.png";
import OWASP from "@/assets/Partners/OWASP.png";
import GDG from "@/assets/Partners/GDG_Taipei.png";

import { useTranslation } from "next-i18next";

//連結放上去就可以點了
//新增link即可點擊

function PartnersDoc() {
  const { t } = useTranslation("partners");
  const hostArr = [
    { pic: builder.src, link: "https://twitter.com/_BuilderDAO" },
  ];
  const coHostArr = [
    { pic: lead.src, link: "https://lead-capital.com/" },
    { pic: carry.src, link: "https://www.carry.live/", w: "200" },
    { pic: zombie.src, link: "https://zombit.info/" },
  ];
  const strategicArr = [
    { pic: Gcp.src, link: "" },
    { pic: TBW.src, link: "https://www.taipeiblockchainweek.com/", w: "200" },
    { pic: Abga.src, link: "https://www.abga.asia/", w: "220" },
    { pic: Gen3.src, link: "https://gen3.network/", w: "180" },
  ];
  const diamondArr = [{ pic: BingX.src, link: "https://bingx.com/" }];
  const goldArr = [
    { pic: Orderly.src, link: "https://orderly.network/", w: "300" },
  ];
  const silverArr = [
    { pic: ACE.src, link: "https://ace.io/", w: "200" },
    { pic: Ref.src, link: "https://www.ref.finance/" },
  ];
  const partnersArr = [
    { pic: Cathy.src, link: "" },
    { pic: BCI.src, link: "https://www.chain.tw/", w: "150" },
    { pic: wormhole.src, link: "https://wormhole.com/" },
    { pic: Binance.src, link: "https://binance.com/" },
    { pic: Gash.src, link: "https://twitter.com/GASH_tw", w: "150" },
    { pic: Appworks.src, link: "https://appworks.tw/" },
    { pic: Onekey.src, link: "https://www.onekey.so/", w: "200" },
    { pic: Solana.src, link: "https://solana.com/zh" },
    { pic: Sei.src, link: "https://www.sei.io/", w: "150" },
    { pic: Tezos.src, link: "https://tezos.com/", w: "200" },
    { pic: Eos.src, link: "https://eosnetwork.com/", w: "200" },
    { pic: Chainlink.src, link: "https://tezos.com/", w: "200" },
    { pic: Tzapac.src, link: "https://www.tzapac.com/", w: "200" },
    { pic: FileCoin.src, link: "https://filecoin.io/zh-cn/", w: "200" },
    { pic: IPFS.src, link: "https://ipfs.tech/", w: "150" },
    { pic: Okx.src, link: "https://www.okx.com/" },
    { pic: term.src, link: "https://termstructure.com/" },
    { pic: Pionex.src, link: "https://www.pionex.com/" },
    { pic: ikala.src, link: "" },
  ];
  const vcArr = [
    { pic: lead.src, link: "https://lead-capital.com/" },
    { pic: Ngc.src, link: "https://ngc.fund" },
    { pic: Ld.src, link: "https://ldcap.com/" },
    { pic: C2_venture.src, link: "https://www.csquared.vc/" },
    { pic: Ac.src, link: "https://accapital.io/" },
    { pic: Mexcvc.src, link: "https://m-ventures.io/" },
    { pic: Okxventures.src, link: "https://www.okx.com/hk/ventures", w: "150" },
    { pic: Huobi.src, link: "https://www.huobi.com/en-us/huobiventures" },
    { pic: venture.src, link: "https://www.bing-ventures.com/", w: "175" },
    { pic: chain.src, link: "https://ctcap.io/", w: "175" },
    { pic: Jz.src, link: "https://twitter.com/jzinvest_xyz" },
  ];

  const technicalArr = [
    { pic: Tikki.src, link: "https://www.tikki.app/", w: "150" },
    { pic: Hong.src, link: "https://www.hongwangtec.com/  ", w: "200" },
  ];
  const advisedArr = [
    { pic: TBA.src, link: "https://tballiance.org.tw/" },
  ];
  const gemArr = [
    {
      pic: Mexc.src,
      link: "https://www.mexc.com/zh-TW/register?inviteCode=mexc-12mrG",
      w: "100",
    },
    { pic: Bla.src, link: "", w: "200" },
    { pic: CA.src, link: "", w: "200" },
    { pic: Pawnfi_gem.src, link: "", w: "100" },
    { pic: Rentii.src, link: "", w: "100" },
    { pic: Friends.src, link: "", w: "200" },
    { pic: Dmail.src, link: "", w: "100" },
    { pic: Bucket.src, link: "", w: "100" },
    { pic: Paraspace.src, link: "", w: "100" },
  ];
  const mediaArr = [
    { pic: followIn.src, link: "https://followin.io/zh-Hant" },
    { pic: noneland.src, link: "https://none.land/" },
    { pic: ABM.src, link: "https://abmedia.io/" },
    { pic: PAnews.src, link: "https://www.panewslab.com/" },
    { pic: Grenade.src, link: "" },
    { pic: BN.src, link: "https://www.bnext.com.tw/" },
    { pic: Web3.src, link: "https://web3plus.bnext.com.tw/" },
    { pic: Stockfeel.src, link: "https://www.stockfeel.com.tw/" },
  ];
  const communityArr = [
    { pic: buzhidao.src, link: "https://buzhidao.tw/zh" },
    { pic: Jclub.src, link: "" },
    {
      pic: rabbit.src,
      link: "https://bt-hare.com/",
      w: "300",
    },
    { pic: Web3ass.src, link: "" },
    { pic: Han.src, link: "", w: "150" },
    { pic: Cardano.src, link: "", w: "400" },
    { pic: Ntufintech.src, link: "" },
    { pic: Xdao.src, link: "", w: "200" },
    { pic: ISC2.src, link: "https://www.isc2.org/", w: "150" },
    { pic: OWASP.src, link: "https://owasp.org/Top10/zh_TW/", w: "150" },
    { pic: GDG.src, link: "https://gdg.community.dev/gdg-taipei/" },
    {
      pic: mrbq.src,
      link: "https://www.instagram.com/mr.bq_invest/",
      w: "100",
    },
    { pic: C1.src, link: "https://m.youtube.com/@LiuliangCool", w: "100" },
    { pic: C2.src, link: "https://discord.gg/JYazfmtbNE", w: "100" },
    { pic: C3.src, link: "https://discord.gg/xpgnft", w: "200" },
    { pic: C4.src, link: "https://twitter.com/cryptowilson_", w: "150" },
    { pic: C5.src, link: "https://link3.to/snapfingersdao", w: "100" },
    { pic: C6.src, link: "https://www.paraland.world/", w: "100" },
    { pic: C7.src, link: "https://linktr.ee/crossspace", w: "150" },
  ];

  const partnersData = {
    title: t("title"),
    subTitle: t("subTitle"),
    id: "Partners",
    host: hostArr,
    coHost: coHostArr,
    strategic: strategicArr,
    diamond: diamondArr,
    gold: goldArr,
    silver: silverArr,
    partners: partnersArr,
    vc: vcArr,
    technical: technicalArr,
    adviser: advisedArr,
    gem: gemArr,
    media: mediaArr,
    community: communityArr,
  };

  return partnersData;
}
export default PartnersDoc;
