import React from "react";
import Logo from "@/assets/LogoWhite.svg";
import Link from "next/link";
import Image from "next/image";

export default function FooterMobile(props: any) {
  const { goPage } = props;
  const buttonStyle = "hover:opacity-80 text-text";

  return (
    <footer className="flex w-full flex-col items-start bg-bg px-5 py-10 lg:hidden">
      <div className="cursor-pointer" onClick={() => goPage("/")}>
        <Image src={Logo.src} alt="logo" width="250" height="100" />
      </div>
      <div className="my-10 grid grid-cols-2 gap-x-10 gap-y-5 text-base font-medium">
        <Link href="/#OverView" passHref>
          <div className={buttonStyle}>OVERVIEW</div>
        </Link>
        <Link href="/#Prizes" passHref>
          <div className={buttonStyle}>PRIZES</div>
        </Link>
        <Link href="/#Schedule" passHref>
          <div className={buttonStyle}>SCHEDULE</div>
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
      <div className="font-medium text-white">© TAIWAN BUILDER HOUSE.</div>
    </footer>
  );
}
