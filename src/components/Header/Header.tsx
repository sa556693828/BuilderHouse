import React from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";

export default function Header() {
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={{ base: "2rem", lg: "8rem" }}
        overflow="hidden"
        className="divider z-50 h-20 w-full bg-transparent text-text"
      >
        <Desktop goPage={goPage} />
        <Mobile goPage={goPage} />
      </Flex>
    </>
  );
}
