import React from "react";
import lead from "@/assets/Partners/lead.svg";
import kryptocamp from "@/assets/Partners/kryptocamp.svg";
import amber from "@/assets/Partners/amber.svg";
import jump from "@/assets/Partners/jump.svg";
import wormhole from "@/assets/Partners/wormhole.svg";
import flow from "@/assets/Partners/flow.svg";
import circle from "@/assets/Partners/circle.svg";
import google from "@/assets/Partners/google.svg";
import title from "@/assets/Partners/partner.svg";
import style from "@/assets/Partners/partnerStyle.svg";
import content from "@/assets/Partners/partnersContent.svg";
import BG from "@/assets/Partners/partnerBg.svg";
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
    <>
      <Box
        className="flex flex-col items-center xl:h-[36rem] 2xl:h-[48rem]"
        id="Partners"
        bgImg={BG.src}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <div className="flex w-full flex-col items-center  px-14 pt-64">
          <div className="flex w-full justify-center gap-14">
            <img
              src={style.src}
              alt=""
              width="70"
              height="100"
              className="hidden lg:block"
            />
            <img src={title.src} alt="" width="580" height="100" />
            <img
              src={style.src}
              alt=""
              width="70"
              height="100"
              className="hidden lg:block"
            />
          </div>
          <div className="my-8 flex w-full justify-between text-4xl font-extrabold leading-[64px] md:w-[580px] lg:justify-center">
            <img
              src={style.src}
              alt=""
              width="50"
              height="100"
              className="block lg:hidden"
            />
            贊助夥伴
            <img
              src={style.src}
              alt=""
              width="50"
              height="100"
              className="block lg:hidden"
            />
          </div>
        </div>
      </Box>
      <div className="flex h-96 items-center justify-center">
        Coming Soon...
        {/* <img src={content.src} alt="" width="90%" height="100" /> */}
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
