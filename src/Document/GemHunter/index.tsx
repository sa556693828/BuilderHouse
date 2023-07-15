import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Followin from "@/assets/Partners/followIn.svg";
import Bucket from "@/assets/Hunter/bucket.png";
import Dmail from "@/assets/Hunter/dmail.png";

// import chaintimes from "@/assets/Hunter/chaintimes.png";
// import Orderly from "@/assets/Hunter/Orderly.svg";

//icon-website
//icon-twitter
//icon-discord
//icon-telegram
const hunterArray = [
  {
    title: "Blablablock",
    prize: "Task",
    pic: Bla.src,
    data: {
      title: "Blablablock",
      linkArr: [
        { icon: "icon-website", link: "https://www.blablablock.com" },
        { icon: "icon-twitter", link: "https://twitter.com/__BlablaBlock__" },
        { icon: "icon-discord", link: "https://discord.com/invite/C82wRDecbS" },
      ],
      illustrate: "購買$BLA；更聰明地交易加密貨幣！",
      content: [
        {
          title: `1. 至官網點擊「Get Started」`,
          detail: [],
        },
        {
          title: `2. 註冊帳號並進入使用介面`,
          detail: [],
        },
        {
          title: `3. 點擊右上角連結MetaMask錢包（BSC鏈）`,
          detail: [],
        },
        {
          title: `4. 於首頁購買10$USDT的$BLA代幣`,
          detail: [],
        },
      ],
      //source: ``,
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
        { icon: "icon-discord", link: "https://discord.com/invite/nYCnNJE6Tr" },
      ],
      illustrate: "完成建立倉位和質押$BUCK至協議",
      content: [
        {
          title: `1. 建立一個倉位Position (最小金額10 $BUCK, 建立CR%: 150%以上, 15鎂等值的SUI, 以目前SUI價格是0.7, 需存入約21.4顆SUI)”`,
          detail: [],
        },
        {
          title: `2. 將任意數量的$BUCK質押到Tank中`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Crypto Arsenal",
    prize: "-",
    pic: CA.src,
    data: {
      title: "Crypto Arsenal",
      linkArr: [
        { icon: "icon-website", link: "https://crypto-arsenal.io/" },
        { icon: "icon-twitter", link: "https://twitter.com/CryptoArsena1" },
        { icon: "icon-telegram", link: "https://t.me/TG_Crypto_Arsenal" },
        { icon: "icon-discord", link: "https://discord.com/invite/DfVSwYprvK" },
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
        { icon: "icon-discord", link: "https://discord.com/invite/5HH4R5KTA3" },
      ],
      illustrate: "購買NFT域名",
    },
    content: [
      {
        title: `1. 使用任意钱包登录Dmail`,
        detail: ['https://mail.dmail.ai/setting/account/100006'],
      },
      {
        title: `2. 参与Presale，购买任意NFT域名账号`,
        detail: ['https://mail.dmail.ai/presale/100006'],
      },
    ],
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
        { icon: "icon-discord", link: "https://discord.com/invite/vPdAfjZ7ja" },
      ],
      illustrate: "完成新手任務",
    },
    content: [
      {
        title: `1. 成功綁定錢包”`,
        detail: [],
      },
      {
        title: `2. 關注一個項目`,
        detail: [],
      },
      {
        title: `3. 綁定Twitter`,
        detail: [],
      },
    ],
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
        {
          title: `1. 到 Telegram 上搜尋 “@FriendsProtocol_Bot”`,
          detail: [],
        },
        {
          title: `2. 使用bot Mint 一張 Friends NFT (15 TON)`,
          detail: [],
        },
        {
          title: `3. 完成任務`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Rentii",
    prize: "-",
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
    },
  },
  {
    title: "Tikki",
    prize: "-",
    pic: Tikki.src,
    data: {
      title: "Tikki",
      linkArr: [
        { icon: "icon-website", link: "https://www.tikki.app/" },
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
      ],
      illustrate: "",
    },
  },
];
const hunterData = {
  title: { name: "Gem Hunter", color: "red" },
  subTitle: "獎金",
  id: "GemHunter",
  data: hunterArray,
  totalPrize: "$ 3,000",
};
export default hunterData;
