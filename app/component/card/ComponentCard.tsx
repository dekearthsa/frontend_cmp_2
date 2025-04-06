"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ComponentCard = () => {
  return (
    <div className="w-[1000px]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-gray-500 rounded-b-2xl "
      >
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 6
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 7
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 8
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[485px]  rounded-bl-2xl pt-[200px] text-white bg-gray-500 font-bold">
            PROJECT 9
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ComponentCard;
