import eventPic from "@/assets/events1.svg";
import eventPic0 from "@/assets/events0.svg";

//新增link即可點擊
const EventsContent = [
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
