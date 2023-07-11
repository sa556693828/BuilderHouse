import React from "react";
import title from "@/assets/FAQ.svg";
import style from "@/assets/PartnersStyle.svg";
import Mask from "@/assets/Mask.svg";
import { Box } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

export default function FAQ(props: { data: any }) {
  const { data } = props;
  return (
    <>
      <Box
        className="flex flex-col items-center justify-between gap-32 bg-gradient-to-r from-greenF to-greenT"
        id="FAQ"
      >
        <div className="flex w-full flex-col items-center justify-center gap-16 px-6 pt-28 text-black lg:px-0 lg:pb-14">
          <div className="flex w-full justify-center">
            <img src={title.src} alt="" width="200" height="100" />
          </div>
          <div className="flex w-full flex-col gap-24 px-10 lg:flex-row">
            <div className="flex w-full justify-end lg:w-1/2">
              <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="text-4xl">General</div>
                {data.general.map((item: any) => (
                  <div className="flex flex-col gap-6">
                    <div className="text-base">{item.q}</div>
                    <div className="font-normal">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-start lg:w-1/2">
              <div className="flex flex-col gap-2 lg:w-1/2">
                <div className="text-4xl">Event</div>
                {data.event.map((item: any) => (
                  <div className="flex flex-col gap-6">
                    <div className="text-base">{item.q}</div>
                    <div className="font-normal">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Box>
    </>
  );
}
