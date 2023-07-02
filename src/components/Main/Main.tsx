import React from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Desktop from "./MainDesktop";
import Mobile from "./MainMobile";

export default function Main() {
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
        py="1.5rem"
        overflow="hidden"
        className="divider z-50 h-20 w-full bg-transparent text-text"
      >
        <Desktop />
        <Mobile />
      </Flex>
    </>
  );
}
