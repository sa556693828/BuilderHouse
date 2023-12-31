import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  linkin?: string;
}) {
  const openLink = (link: string | undefined) => {
    window.open(link, "_blank");
  };
  return (
    <div className="h-full w-full bg-gradient-to-r from-redF to-redT pb-[1px] transition-all">
      <div className="flex h-full w-full flex-col items-center bg-bg p-10 shadow-greenLi">
        <Box
          className="h-32 w-32 rounded-full"
          bgImg={props.avatar}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="center"
        />
        <div className="mt-5 text-center text-lg">
          {props.name}
          <div className="mt-4 whitespace-pre-wrap text-sm font-medium text-text">
            {props.company}
          </div>
        </div>
        <div className="flex w-2/3 justify-center gap-6 py-10">
          <div
            className="cursor-pointer rounded-full p-3 transition-all hover:bg-white/20"
            onClick={
              props.linkin
                ? () => {
                    openLink(props?.linkin);
                  }
                : () => {}
            }
          >
            <SvgIcon
              width={30}
              height={30}
              iconName="icon-link"
              className="fill-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
