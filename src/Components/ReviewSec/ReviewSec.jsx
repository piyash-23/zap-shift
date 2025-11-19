import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bookdeli from "../../assets/bookdeli.png";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../Utilities/Review/ReviewCard";

const ReviewSec = ({ reviews }) => {
  return (
    <>
      <div className="my-9">
        <div className="text-center">
          <img className="mx-auto" src={bookdeli} />
          <h2 className="text-[40px] text-gray-700 font-extrabold my-4">
            What our customers are sayings
          </h2>
          <p className="text-md font-bold my-7">
            Enhance posture, mobility, and well-being effortlessly with Posture{" "}
            <br />
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 70,
            stretch: 0,
            depth: 50,
            scale: 0.7,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <ReviewCard rev={rev} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReviewSec;
