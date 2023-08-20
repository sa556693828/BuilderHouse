import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Followin from "@/assets/Partners/followIn.svg";
import Bucket from "@/assets/Hunter/bucket.png";
import Dmail from "@/assets/Hunter/dmail.png";
import Pawnfi from "@/assets/Hunter/pawnfi_logo.png";
import Bonk from "@/assets/Hunter/bonk.png";
import Genopets from "@/assets/Hunter/genopets.png";
import Paraspace from "@/assets/Hunter/paraspace_logo.png";
import Mexc from "@/assets/Prizes/mexc.png";
import Orderly from "@/assets/Prizes/Orderly.svg";
import noneland from "@/assets/Partners/noneland.svg";

//icon-website
//icon-twitter
//icon-discord
//icon-telegram
import { useTranslation } from "next-i18next";

function hunterDoc() {
  const { t } = useTranslation("hunter");

  const hunterArray = [
    {
      title: "MEXC",
      prize: "1,000USDT",
      pic: Mexc.src,
      data: {
        title: "MEXC",
        linkArr: [
          {
            icon: "icon-website",
            link: "https://www.mexc.com/zh-TW/register?inviteCode=mexc-TBH",
          },
        ],
        illustrate: t("MEXCC"),
        content: [{ title: t("MEXC1T"), detail: [t("MEXC1C1")] }],
      },
    },
    {
      title: "Followin",
      prize: "Task",
      pic: Followin.src,
      data: {
        title: "Followin",
        linkArr: [
          { icon: "icon-website", link: "https://followin.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/followin_io" },
          { icon: "icon-telegram", link: "https://t.me/followin_io" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/vPdAfjZ7ja",
          },
        ],
        illustrate: t("FNC"),
        content: [
          {
            title: t("FN1T"),
            detail: [],
          },
          {
            title: t("FN2T"),
            detail: [],
          },
          {
            title: t("FN3T"),
            detail: [],
          },
        ],
      },
    },
    {
      title: "NONE LAND",
      prize: "Task",
      pic: noneland.src,
      data: {
        title: "NONE LAND",
        linkArr: [{ icon: "icon-website", link: "https://none.land" }],
        illustrate: t("NLS"),
        content: [
          { title: t("NL1T"), detail: [] },
          { title: t("NL2T"), detail: [] },
          { title: t("NL3T"), detail: [] },
        ],
      },
    },
    {
      title: "Blablablock",
      prize: "Task",
      pic: Bla.src,
      data: {
        title: "Blablablock",
        linkArr: [
          { icon: "icon-website", link: "https://www.blablablock.com" },
          { icon: "icon-twitter", link: "https://twitter.com/__BlablaBlock__" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/C82wRDecbS",
          },
        ],
        illustrate: t("BLS"),
        content: [
          { title: t("BL1T"), detail: [] },
          { title: t("BL2T"), detail: [] },
          { title: t("BL3T"), detail: [] },
          { title: t("BL4T"), detail: [] },
        ],
        //source: ``,
      },
    },
    {
      title: "Bonk",
      prize: "-",
      pic: Bonk.src,
      data: {
        title: "Bonk",
        linkArr: [
          { icon: "icon-website", link: "https://www.bonkcoin.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/bonk_inu" },
        ],
      },
    },
    {
      title: "Bucket Protocol",
      prize: "Task",
      pic: Bucket.src,
      data: {
        title: "Bucket Protocol",
        linkArr: [
          { icon: "icon-website", link: "https://app.bucketprotocol.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/bucket_protocol" },
          { icon: "icon-telegram", link: "https://t.me/bucketprotocol" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/nYCnNJE6Tr",
          },
        ],
        illustrate: t("BPS"),
        content: [
          { title: t("BP1T"), detail: [] },
          { title: t("BP2T"), detail: [] },
        ],
      },
    },
    {
      title: "Crypto Arsenal",
      prize: t("CAP"),
      pic: CA.src,
      data: {
        title: "Crypto Arsenal",
        linkArr: [
          { icon: "icon-website", link: "https://crypto-arsenal.io/" },
          { icon: "icon-twitter", link: "https://twitter.com/CryptoArsena1" },
          { icon: "icon-telegram", link: "https://t.me/TG_Crypto_Arsenal" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/DfVSwYprvK",
          },
        ],
        illustrate: t("CAS"),
        content: [
          { title: t("CA1T"), detail: [] },
          { title: t("CA2T"), detail: [] },
          { title: t("CA3T"), detail: [t("CA3C1"), t("CA3C2")] },
        ],
      },
    },
    {
      title: "Dmail",
      prize: "Task",
      pic: Dmail.src,
      data: {
        title: "Dmail",
        linkArr: [
          { icon: "icon-website", link: "https://dmail.ai/" },
          { icon: "icon-twitter", link: "https://twitter.com/Dmailofficial" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/5HH4R5KTA3",
          },
        ],
        illustrate: t("DMS"),
        content: [
          { title: t("DM1T"), detail: [t("DM1C1")] },
          { title: t("DM2T"), detail: [t("DM2C1")] },
        ],
      },
    },
    {
      title: "Friends Protocal",
      prize: "Mint 50%OFF",
      pic: Friends.src,
      data: {
        title: "Friends Protocal",
        linkArr: [
          { icon: "icon-website", link: "https://4riends.org/" },
          { icon: "icon-twitter", link: "https://twitter.com/FriendsProtocol" },
          { icon: "icon-telegram", link: "https://t.me/Friends_Protocol" },
        ],
        illustrate: "",
        content: [
          { title: t("FP1T"), detail: [] },
          { title: t("FP2T"), detail: [] },
          { title: t("FP3T"), detail: [] },
        ],
      },
    },
    {
      title: "Genopets",
      prize: "-",
      pic: Genopets.src,
      data: {
        title: "Genopets",
        linkArr: [
          { icon: "icon-website", link: "https://www.genopets.me/" },
          { icon: "icon-twitter", link: "https://twitter.com/genopets" },
          { icon: "icon-discord", link: "https://discord.com/invite/genopets" },
        ],
      },
    },
    {
      title: "Paraspace",
      prize: "Task",
      pic: Paraspace.src,
      data: {
        title: "Paraspace",
        linkArr: [
          { icon: "icon-website", link: "https://para.space/" },
          { icon: "icon-twitter", link: "https://twitter.com/ParaSpace_NFT" },
          {
            icon: "icon-discord",
            link: "https://discord.com/invite/paraspace",
          },
        ],
        illustrate: "",
        content: [
          {
            title: `1. Supplying ERC-20/ERC-721”`,
            detail: [],
          },
          {
            title: `2. Borrowing ERC-20`,
            detail: [],
          },
          {
            title: `3. Follow Social Media`,
            detail: ["Twitter：@ParaSpace_NFT @ParaSpace_CN", "Join Discord"],
          },
        ],
      },
    },
    {
      title: "PwanFi",
      prize: "-",
      pic: Pawnfi.src,
      data: {
        title: "PawnFi",
        linkArr: [
          { icon: "icon-website", link: "https://pawnfi.com/" },
          { icon: "icon-twitter", link: "https://twitter.com/pawnfiofficial" },
          { icon: "icon-telegram", link: "https://t.me/pawnfiprotocol" },
          { icon: "icon-discord", link: "https://discord.com/invite/pawnfi" },
        ],
      },
    },
    {
      title: "Rentii",
      prize: "Task",
      pic: Rentii.src,
      data: {
        title: "Rentii",
        linkArr: [
          { icon: "icon-website", link: "https://www.rentii.xyz/" },
          { icon: "icon-twitter", link: "" },
          { icon: "icon-telegram", link: "" },
          { icon: "icon-discord", link: "" },
        ],
        illustrate: "",
        content: [
          { title: t("RE1T"), detail: [] },
          { title: t("RE2T"), detail: [] },
          { title: t("RE3T"), detail: [] },
        ],
      },
    },
    {
      title: "Tikki",
      prize: "Task",
      pic: Tikki.src,
      data: {
        title: "Tikki",
        linkArr: [
          { icon: "icon-website", link: "https://app.tikki.app/explore" },
          { icon: "icon-twitter", link: "https://twitter.com/Tikki_NFT" },
          { icon: "icon-discord", link: "https://discord.gg/edMrxhjn" },
        ],
        illustrate: t("TIS"),
        content: [
          { title: t("TI1T"), detail: [t("TI1C1")] },
          { title: t("TI2T"), detail: [t("TI2C1")] },
          { title: t("TI3T"), detail: [t("TI3C1")] },
        ],
      },
    },
  ];
  const hunterData = {
    title: { name: "Gem Hunter", color: "red" },
    subTitle: "獎金",
    id: "GemHunter",
    data: hunterArray,
    totalPrize: 3000,
  };
  return hunterData;
}
export default hunterDoc;
