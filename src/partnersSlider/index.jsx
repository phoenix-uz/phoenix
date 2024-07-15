import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import euphoria from "./euphoria.png";
import arbit from "./arbit.png";
import byd from "./byd logo 1.svg";
import kiberone from "./kiber-one.jpg";
import proskill from "./proskill.svg";
import rcd from "./rcd.png";
import global from "./global.png";
import sayonar from "./sayonar.png";
import emotion from "./e-motion.jpg";
import "./styles.sass";
import "swiper/css";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, href: "https://euphoria-group.uz/", img: euphoria, alt: "euphoria" },
    { id: 2, href: "https://arbitpro.com", img: arbit, alt: "arbit" },
    { id: 3, href: "https://bydauto.uz", img: byd, alt: "byd" },
    { id: 4, href: "https://kiber-one.com", img: kiberone, alt: "kiberone" },
    { id: 5, href: "https://proskill-academy.com/", img: proskill, alt: "proskill" },
    { id: 6, href: "#", img: rcd, alt: "rcd" },
    { id: 7, href: "#", img: global, alt: "global" },
    { id: 8, href: "https://sayonar.uz/", img: sayonar, alt: "sayonar" },
    { id: 9, href: "#", img: emotion, alt: "emotion" },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        className='partnersSlider'
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 4,
          },
          911: {
            slidesPerView: 5,
          },
          1100: {
            slidesPerView: 5,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <a href={item.href}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className='img'
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersSlider;
