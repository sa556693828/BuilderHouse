import React from "react";
import { Box } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import LinearButton from "../LinearButton/LinearButton";

export default function Desktop(props: any) {
  const { goPage } = props;

  const buttonStyle =
    "text-xs lg:w-16 xl:w-20 xl:text-md 2xl:w-28 2xl:text-xl flex items-center justify-center hover:opacity-80 uppercase";

  return (
    <>
      <Box className="main w-full" display={{ base: "none", lg: "block" }}>
        <header className="header flex items-center justify-between">
          <div className="w-44 cursor-pointer" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="500" height="100" />
          </div>
          <div className="nav flex flex-1 items-center justify-center gap-2 px-10 xl:gap-10">
            <Link href="/#OverView" passHref>
              <div className={buttonStyle}>OVERVIEW</div>
            </Link>
            <Link href="/#Prizes" passHref>
              <div className={buttonStyle}>PRIZES</div>
            </Link>
            <Link href="/#Activity" passHref>
              <div className={buttonStyle}>Activity</div>
            </Link>
            <Link href="/#Judges" passHref>
              <div className={buttonStyle}>JUDGES</div>
            </Link>
            <Link href="/#Partners" passHref>
              <div className={buttonStyle}>PARTNERS</div>
            </Link>
            <Link href="/#FAQ" passHref>
              <div className={buttonStyle}>FAQ</div>
            </Link>
          </div>
          <div className="flex w-44 items-center">
            <LinearButton
              color="green"
              contentClass="py-2"
              href="https://www.surveycake.com/s/z7bvM"
            >
              報名
            </LinearButton>
          </div>
        </header>
      </Box>
    </>
  );
}
