import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Followin from "@/assets/Partners/followIn.svg";
// import chaintimes from "@/assets/Hunter/chaintimes.png";
// import Orderly from "@/assets/Hunter/Orderly.svg";

//icon-website
//icon-twitter
//icon-discord
//icon-telegram
const hunterArray = [
  {
    title: "Blablablock",
    prize: "-",
    pic: Bla.src,
    data: {
      title: "Blablablock",
      linkArr: [
        { icon: "icon-website", link: "https://www.blablablock.com" },
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
      ],
      illustrate: "",
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
        {
          title: `5. 完成任務！`,
          detail: [],
        },
      ],
      //source: ``,
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
    title: "Followin",
    prize: "-",
    pic: Followin.src,
    data: {
      title: "Followin",
      linkArr: [
        { icon: "icon-website", link: "https://followin.io/" },
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
      ],
      illustrate: "",
    },
  },
  {
    title: "Friends Protocal",
    prize: "Mint 所花費用將會返一半還給原地址",
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
