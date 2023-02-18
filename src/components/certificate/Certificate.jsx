import React from 'react';
import "./certificate.css";
import { Data } from './Data';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Certificate = () => {
  return (
    <section className="certificate container section" id="certificate">
        <h2 className="section__title">Certificados</h2>
        <span className="section__subtitle">Qualificações adquiridas</span>

        <Swiper className="certificate__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, title, time}) => {
                return (
                    <SwiperSlide className="certificate__card" key={id}>

                        <h3 className="certificate__name">{title}</h3>
                        <span className="certificate__time">{time}</span>
                    
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Certificate;