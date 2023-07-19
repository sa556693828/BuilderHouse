import React, { useRef } from "react";
import Section from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useBreakpointValue } from "@chakra-ui/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination } from "swiper/modules";

export default function Events(props) {
  const { data } = props;
  const swiperRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const openExternalLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="relative h-full w-full pt-10 text-white">
        <div className="absolute right-10 top-0 z-30 flex w-full justify-end gap-6 lg:right-0">
          <div onClick={() => swiperRef.current.slidePrev()}>
            <BsArrowLeft />
          </div>
          <div onClick={() => swiperRef.current.slideNext()}>
            <BsArrowRight />
          </div>
        </div>
        <Swiper
          className="h-full"
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={70}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="flex h-full w-full flex-col items-center justify-start px-10 lg:px-0"
                  onClick={
                    item.link !== ""
                      ? () => openExternalLink(item.link)
                      : () => {}
                  }
                >
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
