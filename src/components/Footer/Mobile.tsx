import React from "react";
import Logo from "@/assets/LogoBlack.svg";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function FooterMobile(props: any) {
  const { goPage } = props;
  const buttonStyle = "hover:opacity-80 text-black font-medium p-2 uppercase";

  return (
    <footer className="flex w-full flex-col items-start gap-8 border-t-[1px] border-white bg-transparent px-8 py-10 lg:hidden">
      <div className="cursor-pointer" onClick={() => goPage("/")}>
        <Image src={Logo.src} alt="logo" width="250" height="100" />
      </div>
      <div className="-ml-3 flex justify-start">
        <div className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20">
          <SvgIcon width={30} height={30} iconName="icon-twitter" />
        </div>
        <div className="rounded-full p-3">
          <SvgIcon width={30} height={30} iconName="icon-telegram" />
        </div>
        <div className="rounded-full p-3">
          <SvgIcon width={30} height={30} iconName="icon-discord" />
        </div>
      </div>
      <div className="-ml-1 grid grid-cols-2 gap-x-10 gap-y-5 text-base font-medium">
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
      <div className="font-medium text-black">© TAIWAN BUILDER HOUSE.</div>
    </footer>
  );
}
