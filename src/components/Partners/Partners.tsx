import React from "react";
import PartnersCard from "./Card";
import lead from "@/assets/Partners/lead.svg";
import kryptocamp from "@/assets/Partners/kryptocamp.svg";
import amber from "@/assets/Partners/amber.svg";
import jump from "@/assets/Partners/jump.svg";
import wormhole from "@/assets/Partners/wormhole.svg";
import flow from "@/assets/Partners/flow.svg";
import circle from "@/assets/Partners/circle.svg";
import google from "@/assets/Partners/google.svg";
import title from "@/assets/Partners.svg";
import style from "@/assets/PartnersStyle.svg";
import content from "@/assets/PartnersContent.svg";
import BG from "@/assets/PartnersBg.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";

export default function Partners() {
  const partnersArray = [jump.src, wormhole.src, flow.src, circle.src];
  const AllArray = [
    { avatar: lead.src, name: "主辦單位" },
    { avatar: kryptocamp.src, name: "執行單位" },
    { avatar: amber.src, name: "執行單位" },
    { avatar: jump.src, name: "合作夥伴" },
    { avatar: wormhole.src, name: "合作夥伴" },
    { avatar: flow.src, name: "合作夥伴" },
    { avatar: circle.src, name: "合作夥伴" },
    { avatar: google.src, name: "雲端夥伴" },
  ];

  return (
    // <Section title="PARTNERS" subTitle="贊助夥伴" >
    //   <div className="hidden w-4/5 flex-col items-center gap-5 lg:flex">
    //     <PartnersCard avatar={lead.src} name="主辦單位" />
    //     <div className="flex gap-5">
    //       <PartnersCard avatar={kryptocamp.src} name="執行單位" />
    //       <PartnersCard avatar={amber.src} name="執行單位" />
    //     </div>
    //     <div className="grid grid-cols-4 gap-5">
    //       {partnersArray.map((item, idx) => (
    //         <PartnersCard avatar={item} key={idx} name="合作夥伴" />
    //       ))}
    //     </div>
    //     <div className="flex gap-5">
    //       <PartnersCard avatar={google.src} name="合作夥伴" />
    //     </div>
    //   </div>
    //   {/* Mobile */}
    //   <div className="flex w-4/5 flex-col items-center gap-5 lg:hidden">
    //     {AllArray.map((item, idx) => (
    //       <PartnersCard avatar={item.avatar} key={idx} name={item.name} />
    //     ))}
    //   </div>
    // </Section>
    <>
      <Box
        className="flex h-full flex-col items-center py-10"
        id="Partners"
        bgImg={BG.src}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <div className="flex gap-14 pt-64">
          <img src={style.src} alt="" width="70" height="100" />
          <img src={title.src} alt="" width="580" height="100" />
          <img src={style.src} alt="" width="70" height="100" />
        </div>
        <div className="my-8 text-4xl font-extrabold leading-[64px]">
          贊助夥伴
        </div>
      </Box>
      <div className="flex justify-center items-center">
        <img src={content.src} alt="" width="90%" height="100" />
      </div>
      <Box
        className="flex h-56 w-full"
        bgImg={Mask.src}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="top"
      />
    </>
  );
}
