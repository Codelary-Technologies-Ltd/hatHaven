import React from 'react'
import styles from '../sass/components/homeseller.module.scss'
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import sellerimages from "../data/bestSellers.json";


function HomeCollectionSwiper() {
    SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, A11y]);
    
  return (
    <div>
        <div>
            <section>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                slideClass={styles.slideT}
                speed={3000}
                loop={true}
                // navigation={true}
                navigation={{ nextEl:'.swiper-button-next', prevEl: '.swiper-button-prev' }}
                EffectFade={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }}
                // pagination={{ clickable: true }}
                className="mySwiper"
                >
                {sellerimages.map((slide, index) => (
                <SwiperSlide
                  key={slide.id ? slide.id : index}
                >
                  <img src={slide?.sellerImage} alt='img' style={{width: '100%', height: "300px"}}/>
                </SwiperSlide>
            ))}
            </Swiper>
            <div class="swiper-button-prev">
                <div className={styles.butdiv}></div>
            </div>
            <div class="swiper-button-next">
                <div className={styles.butdiv}></div>
            </div>
            </section>
        </div>
    </div>
  )
}

export default HomeCollectionSwiper