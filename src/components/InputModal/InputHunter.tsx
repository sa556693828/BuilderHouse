import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import SvgIcon from "../SvgIcon/SvgIcon";
import line from "@/assets/lineFill.svg";

export default function InputHunter(props: {
  data: any;
  isOpen: boolean;
  onClose: any;
}) {
  const { isOpen, onClose, data } = props;
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ lg: "3xl", xl: "6xl" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent className="overflow-hidden whitespace-pre-wrap rounded-sm bg-rainbow p-[1px] transition-all">
        <div className="flex h-full w-full flex-col rounded-sm bg-bg p-5 shadow-greenLi xl:p-10">
          <ModalHeader className="flex justify-center text-center text-2xl">
            {data?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="flex flex-col gap-12 text-center">
            <div className="flex w-full justify-center gap-6">
              {data?.linkArr?.map((item: any, index: any) => {
                return (
                  <div
                    className={`${
                      item.link
                        ? "cursor-pointer fill-icon"
                        : "pointer-events-none fill-icon/30"
                    } rounded-full p-2 transition-all`}
                    onClick={item.link ? () => openLink(item.link) : () => {}}
                  >
                    <SvgIcon width={30} height={30} iconName={item.icon} />
                  </div>
                );
              })}
            </div>

            <div className="line relative flex w-full">
              <div className="z-10 flex w-1/3 justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                  1
                </div>
              </div>
              <div className="z-10 flex w-1/3 justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                  2
                </div>
              </div>
              <div className="z-10 flex w-1/3 justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-greenF to-greenT text-2xl font-bold text-black">
                  3
                </div>
              </div>
              <div className="absolute top-1/2 w-full">
                <img src={line.src} width="100%" height="2px" />
              </div>
            </div>
            <div className="content flex w-full text-sm text-text">
              <div className="flex w-1/3 justify-center">
                <div className=" max-w-xs">{`first`}</div>
              </div>
              <div className="flex w-1/3 justify-center">
                <div className=" max-w-xs">{`second`}</div>
              </div>
              <div className="flex w-1/3 justify-center">
                <div className=" max-w-xs">{`third`}</div>
              </div>
            </div>

            <p className="text-left text-xs">{data?.source}</p>
          </ModalBody>
        </div>
      </ModalContent>
    </Modal>
  );
}
