import { useTranslation } from "next-i18next";

function AgendaDoc() {
  const { t } = useTranslation("agenda");
  const agendaData = [
    { time: "09:00", topic: "Opening" },
    { time: "09:15", topic: "TBD", subTitle: ["TBD"] },
    {
      time: "09:30",
      topic: "TBD",
      subTitle: ["Blues, Google Cloud Field Sales Representative"],
    },
    {
      time: "09:45",
      topic: "TBD",
      subTitle: ["Johnny, Appworks Analyst"],
    },
    {
      time: "10:00",
      topic:
        "Decentralization in Community Management：\nHow Web3 Changes the Landscape",
      subTitle: [
        "Host : Audrey, Orderly CGO",
        "Bonnie, Bonnie Blockchain Founder\n",
        "Justin, JClub Founder\n",
        "Alvin, CryptoWesearch Co - Founder\n",
        "JZ, JZ Invest Founder\n",
      ],
    },
    {
      time: "11:00",
      topic: "Taiwan Builder House Demos",
      subTitle: ["Reyield Finance", "Blablablcok", "Crypto Arsenal"],
    },
    {
      time: "11:45",
      topic:
        "Cloud Cybersecurity Strategy for Startups: Safeguarding Innovation, Cost Optimization",
      subTitle: [
        "Host : Josephine, BuilderDAO Core Contributor",
        "Fngi Shiu, GDG Taipei Organizer (Security)\n",
        "Ray Lin, (ISC)² Taipei Chapter, AWS Security Hero\n",
        "Henry Hu, OWASP Taiwan Chapter\n",
      ],
    },
    {
      time: "12:15",
      topic: "How Communities Boost Trading: \nInitiative and Impact",
      subTitle: [
        "Host : Carlos, ACE Exchange",
        "Murmurcats, GDG Taipei Organizer (Security)\n",
        "Datatw, DA Capital\n",
        "Crypto Paul, Full-time crypto trader \n",
      ],
    },
    {
      time: "12:45",
      topic: "Play, Earn, Innovate: Genopets' Vision of the GameFi Landscap",
      subTitle: ["Albert, Genopets Founder"],
    },
    {
      time: "13:00",
      topic: "Non-EVM Panel",
      subTitle: [
        "Host : TBD",
        "Greg, Bucket, Sui\n",
        "Bonk, Solana\n",
        "Howard, Ton Foundation, Ton\n",
      ],
    },
    {
      time: "13:30",
      topic: "The Advantages and Challenges of Taiwan's Startups",
      subTitle: [
        "Host : Jeff, Zombit Co - Founder",
        "Damien, Binance Global Partnership\n",
        "Josh, Bingx\n",
        "Michael, Lead Capital Co-Founder\n",
        "Henry, Meta GSR Sales Director\n",
      ],
    },
    {
      time: "14:30",
      topic: "How to Increase Your Chances to Get Funded through Demo3",
      subTitle: ["Jim, Gen3、Demo3 Founder"],
    },
    { time: "14:45", topic: "Taiwan Builder House Demos", subTitle: ["Teams"] },
    {
      time: "17:30",
      topic: "From Campus to Crypto: Empowering Young Minds in the Web3 Startup Ecosystem",
      subTitle: [
        "Host : TBD",
        "Henry, NTUST.CS, Cryptoeducate CTO\n",
        "Jennifer, NTU, FR PR Lead\n",
        "Ken Leong, NTUT.IFM, Anyway network Founder\n",
      ],
    },
    {
      time: "18:00",
      topic: "Taiwan Builder House Result",
      subTitle: ["Teams"],
    },
  ];
  const AgendaData = {
    title: { name: t("title"), color: "blue" },
    subTitle: t("subTitle"),
    id: "Agenda",
    data: agendaData,
  };
  return AgendaData;
}
export default AgendaDoc;
