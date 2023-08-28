import React from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./MainDesktop";
import Mobile from "./MainMobile";
import Sphere from "@/assets/Sphere.png";
import Header from "../Header/Header";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Main() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <Header />
      <Flex
        className="relative flex-col items-center overflow-hidden"
        minH={isMobile ? "full" : ""}
        h={isMobile ? "" : "calc(100vh)"}
        pt="5rem"
      >
        <div className="absolute -right-10 top-32 transition-all lg:right-32 lg:top-44 xl:top-52">
          <img src={Sphere.src} alt="" width="" height="100" />
        </div>
        <Desktop />
        <Mobile />
      </Flex>
    </>
  );
}
