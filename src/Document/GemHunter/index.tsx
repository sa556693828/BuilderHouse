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
      illustrate:
        "1. 至官網點擊「Get Started」\n2. 註冊帳號並進入使用介面\n3. 點擊右上角連結MetaMask錢包（BSC鏈）\n4. 於首頁購買10$USDT的$BLA代幣\n5. 完成任務！",
      //content: ``,
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
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
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
    prize: "-",
    pic: Friends.src,
    data: {
      title: "Friends Protocal",
      linkArr: [
        { icon: "icon-website", link: "https://4riends.org/" },
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
      ],
      illustrate: "",
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
};
export default hunterData;
