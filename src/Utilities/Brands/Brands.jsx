import React from "react";
import amazon from "../../assets/amazon.png";
import casio from "../../assets/casio.png";
import moonstar from "../../assets/moonstar.png";
import satr from "../../assets/star.png";
import startole from "../../assets/start_people.png";
import randstat from "../../assets/randstad.png";
import amazonV from "../../assets/amazon_vector.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Brands = () => {
  return (
    <>
      <div className="p-3 my-6">
        <div>
          <h2 className="text-center font-extrabold text-[28px] my-4">
            We've helped thousands of sales teams
          </h2>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={casio} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={moonstar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={satr} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={startole} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={randstat} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazonV} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Brands;
