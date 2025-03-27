"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselPage() {
  return (
    <>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <Image
            src='/images/dog.webp'
            alt='강아지이미지'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/dog.webp'
            alt='강아지이미지'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='/images/dog.webp'
            alt='강아지이미지'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: "100%", height: "400px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
