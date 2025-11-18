import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import manrun from "../../assets/manrun.png";
import cour from "../../assets/cour.png";
import biker from "../../assets/bikeri.png";
import bikel from "../../assets/bikel.png";
const SwipeHero = () => {
  return (
    <>
      <div>
        <Swiper
          className="mySwiper my-4"
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="p-7 bg-white rounded-[30px]">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <div className="flex-2">
                  <img src={manrun} />
                  <h2 className="text-[56px] font-extrabold text-primary">
                    We Make Sure <br /> Your{" "}
                    <span className="text-secondary">Parcel Arrives</span> On
                    Time <br />– No Fuss.
                  </h2>
                  <p>
                    Enjoy fast, reliable parcel delivery with real-time tracking
                    and zero hassle. From personal packages to business
                    shipments — we deliver on time, every time.
                  </p>
                  <div>
                    <button className="btn bg-secondary text-link font-bold text-lg rounded-full p-6">
                      Track Your Parcel
                    </button>
                    <button className="btn border-side bg-transparent border-2 rounded-full p-6 ml-2">
                      Be a rider
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <img src={cour} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-7 bg-white rounded-[30px]">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <div className="flex-2">
                  <h2 className="text-[56px] font-extrabold text-primary">
                    Fastest <br />{" "}
                    <span className="text-secondary">Delivery</span> & Easy{" "}
                    <br /> <span className="text-secondary">Pinkup</span>
                  </h2>
                  <p>
                    Enjoy fast, reliable parcel delivery with real-time tracking
                    and zero hassle. From personal packages to business
                    shipments — we deliver on time, every time.
                  </p>
                  <div>
                    <button className="btn bg-secondary text-link font-bold text-lg rounded-full p-6">
                      Track Your Parcel
                    </button>
                    <button className="btn border-side bg-transparent border-2 rounded-full p-6 ml-2">
                      Be a rider
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <img src={biker} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-7 bg-white rounded-[30px]">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                <div className="flex-2">
                  <h2 className="text-[56px] font-extrabold text-primary">
                    Delivery in{" "}
                    <span className="text-secondary">
                      30 <br /> Minutes
                    </span>{" "}
                    at your <br />
                    doorstep
                  </h2>
                  <p>
                    Enjoy fast, reliable parcel delivery with real-time tracking
                    and zero hassle. From personal packages to business
                    shipments — we deliver on time, every time.
                  </p>
                  <div>
                    <button className="btn bg-secondary text-link font-bold text-lg rounded-full p-6">
                      Track Your Parcel
                    </button>
                    <button className="btn border-side bg-transparent border-2 rounded-full p-6 ml-2">
                      Be a rider
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <img src={bikel} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipeHero;
