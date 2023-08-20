import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Taiwan from "@/assets/Taiwan.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Vector from "@/assets/Vector.svg";
import LinearButton from "../LinearButton/LinearButton";
import { useTranslation } from "next-i18next";
// -top-[26px]
export default function MainDesktop() {
  const { t } = useTranslation("main");
  return (
    <Flex
      className="h-full w-full flex-col px-16 pb-8 transition-all"
      display={{ base: "none", lg: "flex" }}
    >
      <div className="relative flex h-3/5 w-full flex-col items-start justify-end gap-11 pb-12">
        <img src={Taiwan.src} alt="" className="z-20 h-1/2" />
        <div className="flex w-full justify-between pr-10">
          <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text p-2 text-5xl font-medium text-transparent">
            {t("subTitle")}
          </div>
          <img src={dotThree.src} alt="" className="h-12" />
        </div>
        <img
          src={dotT.src}
          alt=""
          className="absolute right-96 top-16 h-10 xl:left-96"
        />
      </div>
      <div className="relative flex h-2/5 w-full justify-center border-y-2 border-line py-6">
        <div className="absolute -left-4 -top-[26px]">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div>
        <div className="absolute -top-[26px] right-72">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div>
        <div className="absolute -bottom-[26px] right-24">
          <img src={Vector.src} alt="" width="50" height="50" />
        </div>
        <div className="absolute right-[312px] top-0 h-full w-[2px] bg-text" />
        <div className="flex w-full flex-col items-start justify-between gap-2 pl-10 pr-[340px]">
          <div className="text-lg font-normal xl:text-xl">{t("content")}</div>
          <div className="flex h-12 gap-6">
            <LinearButton color="red" href="https://bit.ly/3DgPiy0">
              {t("joinL")}
            </LinearButton>
            <LinearButton color="blue" href="https://bit.ly/3pPWH4r">
              {t("joinR")}
            </LinearButton>
          </div>
        </div>
      </div>
    </Flex>
  );
}
