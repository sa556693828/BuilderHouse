import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import InputFormat from "./InputFormat/InputFormat";

export default function InputModal(props: any) {
  const { isOpen, onClose } = props;
  const [member, setMember] = React.useState([
    { name: "", telegram: "", email: "" },
  ]);
  const data = {
    groupName: "",
    groupMember: member,
  };
  const cleanData = () => {
    setMember([{ name: "", telegram: "", email: "" }]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={cleanData} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent className="whitespace-pre-wrap border border-redF bg-bg px-20 py-6">
        <ModalHeader className="flex justify-center text-center text-3xl">
          {props?.content?.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="flex flex-col text-center">
          <p className="mb-8 text-2xl">{props?.content?.prize}</p>
          <p className="mb-8 text-xl">{props?.content?.illustrate}</p>
          <p className="mb-8 text-left text-2xl">{props?.content?.content}</p>
          <p className="mb-8 text-left text-xl">{props?.content?.source}</p>
          {/* {member.map((item, index) => (
            <InputFormat key={index} index={index} />
          ))} */}
        </ModalBody>

        <ModalFooter className="flex w-full">
          {/* <Button
            variant="ghost"
            className="-ml-3 flex items-center justify-start gap-2"
            onClick={() => {
              setMember([...member, { name: "", telegram: "", email: "" }]);
            }}
          >
            <IoMdAddCircle className="h-6 w-6" />
            新增組員
          </Button>
          <button
            className="w-60 rounded-full bg-white p-3 text-lg font-semibold text-black transition-all hover:bg-gray-300"
            onClick={() => {
              console.log(member);
            }}
          >
            送出報名
          </button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
