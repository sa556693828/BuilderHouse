import React from "react";
import { Flex } from "@chakra-ui/react";
import Taiwan from "@/assets/TaiwanM.svg";
import dotT from "@/assets/dotT.svg";
import dotThree from "@/assets/dotThree.svg";
import Vector from "@/assets/Vector.svg";
import LinearButton from "../LinearButton/LinearButton";
import { useTranslation } from "next-i18next";
// -top-[26px]
export default function MainMobile() {
  const { t } = useTranslation("main");
  return (
    <>
      <Flex
        className="h-full w-full flex-col items-center px-10 pb-4 pt-12 transition-all"
        display={{ base: "flex", lg: "none" }}
      >
        <div className="relative flex h-1/2 w-full flex-col items-start justify-end gap-4 pb-4">
          <div className="pb-6 pl-4">
            <img src={dotThree.src} alt="" width="40" height="50" />
          </div>
          <img src={Taiwan.src} alt="" className="z-20 h-2/3" />
          <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text p-2 text-2xl font-medium text-transparent">
            {t("subTitle")}
          </div>
        </div>
        <div className="relative flex h-1/2 justify-center border-y-2 border-line py-6">
          <div className="absolute -left-2 -top-[16px]">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -top-[16px] left-44">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="absolute -bottom-[16px] right-24">
            <img src={Vector.src} alt="" width="30" height="50" />
          </div>
          <div className="flex w-full flex-col items-start justify-between gap-2 overflow-x-hidden  px-2">
            <div className="text-base font-normal sm:text-lg">
              {t("content")}
            </div>
            <div className="flex w-full items-start justify-between gap-2">
              <div className="flex h-5/6 flex-col gap-6">
                <LinearButton color="red" href="https://bit.ly/3DgPiy0">
                  {t("joinL")}
                </LinearButton>
                <LinearButton color="blue" href="https://bit.ly/3pPWH4r">
                  {t("joinR")}
                </LinearButton>
              </div>
              <img src={dotT.src} alt="" width="50" height="50" />
            </div>
          </div>
        </div>
      </Flex>
    </>
  );
}
