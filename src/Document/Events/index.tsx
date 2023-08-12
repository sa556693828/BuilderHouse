import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/events0.png";
import lead0719 from "@/assets/Activity/lead0719.png";
import trader0719 from "@/assets/Activity/trader0719.png";
import After_party from "@/assets/Activity/After_party.png";


//新增link即可點擊
const EventsContent = [
  {
    pic: After_party.src,
    date: `18:30 ~ 23:00, August 31,2023`,
    title: "TBH After Party",
    content: `Tabwain Builder House end with its amazing closing party held on 8/31 at Taipei Babylon.`,
    link: "https://lu.ma/TBH2023",
  },  
  {
    pic: lead0719.src,
    date: `JULY 19,2023`,
    title: "LeadUp The Night: 區塊鏈與 AI",
    content: `重塑資產管理的未來`,
    link: "https://lu.ma/LeadUpTheNight_9",
  },  
  {
    pic: trader0719.src,
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

];

const EventsData = {
  title: { name: "Events", color: "blue" },
  subTitle: "近期活動",
  id: "Events",
  data: EventsContent,
};
export default EventsData;
