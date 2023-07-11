import React from "react";
import Logo from "@/assets/LogoWhite.svg";
import Link from "next/link";
import Image from "next/image";

export default function DesktopFooter(props: any) {
  const { goPage } = props;
  const buttonStyle =
    "flex w-10 items-center justify-center font-medium hover:opacity-80 xl:w-14 text-black";

  return (
    <footer className="hidden w-full items-center justify-center gap-5 bg-transparent px-16 py-4 lg:flex">
      <div className="cursor-pointer" onClick={() => goPage("/")}>
        <Image src={Logo.src} alt="logo" width="260" height="100" />
      </div>
      <div className="flex flex-1 items-center justify-center gap-16 pl-10 text-sm xl:text-base">
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
      <div className="flex max-w-sm justify-end text-xs font-medium text-black xl:text-base">
        © TAIWAN BUILDER HOUSE.
      </div>
    </footer>
  );
}
