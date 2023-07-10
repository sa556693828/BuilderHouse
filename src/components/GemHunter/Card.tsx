import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
import InputModal from "../InputModal/InputModal";

export default function HunterCard(props: {
  title: string;
  prize: string;
  pic: any;
  content: any;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [content, setContent] = useState({
    title: "",
    prize: "",
    illustrate: "",
    content: "",
    source: "",
  });
  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  return (
    <div
      className="h-full rounded-xl bg-gradient-to-r from-redF to-redT p-[2px] transition-all"
      onClick={onOpen}
    >
      <div
        className={`flex h-full w-full items-center gap-6 rounded-xl bg-bg p-4 md:gap-2`}
      >
        <Image
          src={props.pic?.pic}
          width={props.pic?.w}
          height="60"
          alt="avatar"
        />
        <div className="flex flex-col">
          <div className="text-lg">{props.title}</div>
          <div className="text-md font-normal">{props.prize}</div>
        </div>
      </div>
      <InputModal isOpen={isOpen} onClose={onClose} content={content} />
    </div>
  );
}
