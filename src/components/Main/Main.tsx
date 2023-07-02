import React from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./MainDesktop";
import Mobile from "./MainMobile";
import Sphere from "@/assets/Sphere.png";
import Header from "../Header/Header";

export default function Main() {
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <Flex className="relative h-[100vh] flex-col items-center overflow-hidden">
      <div className="absolute -right-10 top-64 transition-all lg:right-32 lg:top-44 xl:top-52">
        <img src={Sphere.src} alt="" width="" height="100" />
      </div>
      <Header />
      <Desktop />
      <Mobile />
    </Flex>
  );
}
