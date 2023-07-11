import React from "react";
import Logo from "@/assets/LogoBlack.svg";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "../SvgIcon/SvgIcon";

export default function DesktopFooter(props: any) {
  const { goPage } = props;
  const buttonStyle = "font-medium hover:opacity-80 text-black p-2 uppercase";

  return (
    <footer className="hidden w-full flex-col items-center justify-center gap-5 border-t-[1px] border-white bg-transparent px-24 py-6 lg:flex">
      <div className="flex w-full justify-between">
        <div className="cursor-pointer" onClick={() => goPage("/")}>
          <Image src={Logo.src} alt="logo" width="260" height="100" />
        </div>
        <div className="flex items-center justify-center gap-12 text-sm xl:text-base">
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
      </div>
      <div className="flex w-full justify-between">
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
        <div className="flex max-w-sm justify-end text-xs font-medium text-black xl:text-base">
          © TAIWAN BUILDER HOUSE.
        </div>
      </div>
    </footer>
  );
}
