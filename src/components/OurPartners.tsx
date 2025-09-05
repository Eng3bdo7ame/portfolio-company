"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Partner, Client } from "../types/index";
// import { getHomeData } from "@/lib/api";

type OurPartnersProps = {
  items: (Partner | Client)[];
};

export default function OurPartners({ items }: OurPartnersProps) {
  return (
    <section className="py-14 ">
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={9000}
          pagination={{ clickable: true }}
          modules={[Autoplay]}
          className="mySwiper">
          {Array.isArray(items) &&
            items
              .filter((item) => item.image)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={260}
                    height={80}
                    className="flex justify-center items-center border border-solid border-gray-200 shadow-sm h-24 rounded-2xl object-contain"
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
}
