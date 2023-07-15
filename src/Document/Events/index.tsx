import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/events0.png";
import lead0719 from "@/assets/lead0719.png";
import trader0719 from "@/assets/trader0719.png";

//新增link即可點擊
const EventsContent = [
  {
    pic: eventPic.src,
    date: `JULY 19,2023`,
    title: "LeadUp The Night: 區塊鏈與 AI",
    content: `重塑資產管理的未來`,
    link: "https://lu.ma/LeadUpTheNight_9",
  },  {
    pic: eventPic.src,
    date: `JULY 19,2023`,
    title: "Trader House",
    content: `量化101，策略交易只有 CTA？`,
    link: "https://lu.ma/TraderHouse_1",
  },
  {
    pic: eventPic0.src,
    date: `JUNE 14,2023`,
    title: "Wormhole來了！",
    content: `多鏈時代不可不知的 Bridge; 如何獲得生態基金？`,
    link: "https://www.youtube.com/live/5zbqx8QOc2Y?feature=share",
  },
  {
    pic: eventPic.src,
    date: `JULY 11,2023`,
    title: "將代幣激勵引入實體世界",
    content: `Depin 的基礎設施革命`,
    link: "https://www.youtube.com/watch?v=C4SJnfuVWgM&ab_channel=BuilderDAO",
  },

];

const EventsData = {
  title: { name: "Events", color: "blue" },
  subTitle: "近期活動",
  id: "Events",
  data: EventsContent,
};
export default EventsData;
