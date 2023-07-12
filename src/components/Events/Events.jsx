import React, { use, useEffect } from "react";
import Section from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useBreakpointValue } from "@chakra-ui/react";

// import required modules
import { Pagination } from "swiper/modules";

export default function Events(props) {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="h-full w-full text-white">
        <Swiper
          className="h-full"
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={70}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
        >
          {data.data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full flex-col items-center justify-start px-10 lg:px-0">
                  <img src={item.pic} alt="event" width="1000" />
                  <div className="mt-4 flex w-full flex-col gap-2 text-left">
                    <div className="text-xs text-text">{item.date}</div>
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-text">{item.content}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
}
