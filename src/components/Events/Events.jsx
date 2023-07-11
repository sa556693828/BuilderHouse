import React from "react";
import Section from "../Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import eventPic from "@/assets/events1.svg";

// import required modules
import { Pagination } from "swiper/modules";

export default function Events(props) {
  const { data } = props;
  return (
    <Section
      title={{ title: data.title.name, color: data.title.color }}
      subTitle={data.subTitle}
      id={data.id}
    >
      <div className="h-full w-full text-white">
        <Swiper
          className="h-full"
          slidesPerView={3}
          spaceBetween={70}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="flex h-full w-full flex-col items-center justify-start">
              <img src={eventPic.src} alt="event" width="800" />
              <div className="mt-4 flex w-full flex-col gap-2 text-left">
                <div className="text-xs text-text">{`JULY 11,2023`}</div>
                <div className="text-lg font-bold">{`將代幣激勵引入實體世界`}</div>
                <div className="text-text">{`Depin 的基礎設施革命`}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full w-full flex-col items-center justify-start">
              <img src={eventPic.src} alt="event" width="800" />
              <div className="mt-4 flex w-full flex-col gap-2 text-left">
                <div className="text-xs text-text">{`JULY 11,2023`}</div>
                <div className="text-lg font-bold">{`將代幣激勵引入實體世界`}</div>
                <div className="text-text">{`Depin 的基礎設施革命`}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full w-full flex-col items-center justify-start">
              <img src={eventPic.src} alt="event" width="800" />
              <div className="mt-4 flex w-full flex-col gap-2 text-left">
                <div className="text-xs text-text">{`JULY 11,2023`}</div>
                <div className="text-lg font-bold">{`將代幣激勵引入實體世界`}</div>
                <div className="text-text">{`Depin 的基礎設施革命`}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full w-full flex-col items-center justify-start">
              <img src={eventPic.src} alt="event" width="800" />
              <div className="mt-4 flex w-full flex-col gap-2 text-left">
                <div className="text-xs text-text">{`JULY 11,2023`}</div>
                <div className="text-lg font-bold">{`將代幣激勵引入實體世界`}</div>
                <div className="text-text">{`Depin 的基礎設施革命`}</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-full w-full flex-col items-center justify-start">
              <img src={eventPic.src} alt="event" width="800" />
              <div className="mt-4 flex w-full flex-col gap-2 text-left">
                <div className="text-xs text-text">{`JULY 11,2023`}</div>
                <div className="text-lg font-bold">{`將代幣激勵引入實體世界`}</div>
                <div className="text-text">{`Depin 的基礎設施革命`}</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
}
