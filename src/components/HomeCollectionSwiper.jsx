import React from 'react'
import styles2 from '../sass/components/homecollection.module.scss'
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { pictures } from './picture';

function HomeCollectionSwiper() {
    SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
    
  return (
    <div>
        <div>
            <section>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                speed={500}
                loop={true}
                // navigation={true}
                EffectFade={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                // pagination={{ clickable: true }}
                className="mySwiper"
                >
                {pictures.map((slide, index) => (
                <SwiperSlide 
                key={slide.id ? slide.id : index}
                className={styles2.collections}
                >
                <img 
                    src={slide?.thumbnail}
                    alt={slide?.title}
                />
                </SwiperSlide>
                ))}
            </Swiper>
            </section>
        </div>
    </div>
  )
}

export default HomeCollectionSwiper