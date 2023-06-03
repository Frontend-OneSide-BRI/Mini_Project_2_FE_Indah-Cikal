import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import carouselImage from "../../Data/CarouselImg";
import "./Carousel.css";

export default function Carousel() {
  return (
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper "
      >
        {carouselImage.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="px-20 sm:px-48 text-center img-caro pt-20 sm:pt-10 flex flex-col justify-center text-white-bone h-[400px] sm:h-[500px]"
              style={{
                backgroundImage: `url(${item.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                
              }}
            >
              <h2 className="text-5xl font-bold tracking-widest">
                {item.title} .
              </h2>
              <p className="tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                labore unde corporis mollitia, harum in animi magni pariatur
                libero magnam.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
