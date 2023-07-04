import React, { useState } from "react";
import {
  Flex,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Mobile(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { goPage } = props;
  const [hover, setHover] = useState(false);

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        className="w-full flex-col items-center"
      >
        <div className="flex w-full items-center justify-between">
          <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="150" height="100" />
          </div>
          <Button
            className="bg-transparent hover:bg-transparent"
            onClick={() => {
              setHover(true);
              onOpen();
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <HamburgerIcon w={6} h={6} color={hover ? "gray.400" : "white"} />
          </Button>
        </div>
      </Flex>

      <Drawer
        isOpen={isOpen}
        size="xs"
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent className="flex items-center gap-4 bg-bg">
          <Flex
            display={{ base: "flex", lg: "none" }}
            className="divider w-full flex-col items-center px-2 pb-4 pt-5"
          >
            <div className="flex w-full items-center justify-between">
              <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
                <Image src={Logo.src} alt="logo" width="150" height="100" />
              </div>
              <Button
                className="bg-transparent"
                onClick={() => {
                  setHover(true);
                  onClose();
                }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <SmallCloseIcon w={6} h={6} color="white" />
              </Button>
            </div>
          </Flex>
          {/* <Divider w="100%" /> */}
          <Link
            href="/#OverView"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                OVERVIEW
              </div>
              <div className="pl-3 text-base font-black">總覽</div>
            </div>
          </Link>
          <Link
            href="/#Prizes"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                PRIZES
              </div>
              <div className="pl-3 text-base font-black">總獎金</div>
            </div>
          </Link>
          <Link
            href="/#Schedule"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                SCHEDULE
              </div>
              <div className="pl-3 text-base font-black">活動日程</div>
            </div>
          </Link>
          <Link
            href="/#Judges"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                JUDGES
              </div>
              <div className="pl-3 text-base font-black">裁判群</div>
            </div>
          </Link>
          <Link
            href="/#Partners"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                PARTNERS
              </div>
              <div className="pl-3 text-base font-black">夥伴</div>
            </div>
          </Link>
          <Link
            href="/#FAQ"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6">
              <div className="bg-gradient-to-r from-greenF to-greenT bg-clip-text text-xl font-bold text-transparent">
                FAQ
              </div>
              <div className="pl-3 text-base font-black">相關問題</div>
            </div>
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
}
