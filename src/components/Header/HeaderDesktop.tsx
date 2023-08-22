import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import LinearButton from "../LinearButton/LinearButton";

export default function Desktop(props: any) {
  const { goPage, locale } = props;
  const changeToEn = locale === "en" ? "tw" : "en";

  const buttonStyle =
    "text-sm w-16 xl:w-20 xl:text-md flex items-center justify-center hover:opacity-80 uppercase";
  return (
    <>
      <Box className="main w-full" display={{ base: "none", lg: "block" }}>
        <header className="header flex items-center justify-between">
          <div className="w-44 cursor-pointer" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="500" height="100" />
          </div>
          <div className="nav flex items-center justify-center gap-2 px-2 xl:gap-4">
            <Link href="/#OverView" passHref>
              <div className={buttonStyle}>OVERVIEW</div>
            </Link>
            <Link href="/#Prizes" passHref>
              <div className={buttonStyle}>PRIZES</div>
            </Link>
            <Link href="/#GemHunter" passHref>
              <div className={buttonStyle}>Hunter</div>
            </Link>
            <Link href="/#Activity" passHref>
              <div className={buttonStyle}>Activity</div>
            </Link>
            <Link href="/#Judges" passHref>
              <div className={buttonStyle}>JUDGES</div>
            </Link>
            <Link href="/#Events" passHref>
              <div className={buttonStyle}>EVENTS</div>
            </Link>
            <Link href="/#Partners" passHref>
              <div className={buttonStyle}>PARTNERS</div>
            </Link>
            <Link href="/#FAQ" passHref>
              <div className={buttonStyle}>FAQ</div>
            </Link>
          </div>
          <div className="flex gap-6">
            <div className="flex w-36 items-center transition-all xl:w-44 2xl:w-56">
              <LinearButton
                color="green"
                contentClass="py-2 uppercase"
                href="https://bit.ly/3pPWH4r"
              >
                FREE TICKET
              </LinearButton>
            </div>
            <div className="h-12 w-[1px] bg-gradient-to-r from-greenF to-greenT" />
            <div>
              <div className="h-full w-[85px] rounded-full bg-gradient-to-r from-greenF to-greenT p-[2px] transition-all">
                <Link href={"/"} locale={changeToEn}>
                  <button className="relative flex h-full w-full items-center justify-between rounded-full bg-bg px-4 text-base font-medium leading-normal text-text">
                    <div
                      className={`${
                        locale === "en" ? "text-test" : "text-bg"
                      } z-20`}
                    >
                      中
                    </div>
                    <div
                      className={`${
                        locale !== "en" ? "text-test" : "text-bg"
                      } z-20`}
                    >
                      EN
                    </div>
                    <div
                      className={`absolute left-[9px] top-[7px] h-[30px] w-[30px] rounded-full bg-gradient-to-r from-greenF to-greenT transition-all ${
                        locale === "en" ? "translate-x-8" : ""
                      }`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </Box>
    </>
  );
}
