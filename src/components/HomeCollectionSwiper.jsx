import React from 'react'
import styles2 from '../sass/components/homecollection.module.scss'
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import pic from '../assets/png/'


function HomeCollectionSwiper() {
    SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <div>
        <div>
            <section className={styles2.homeCollectHead}>
                <h1>Our Collections</h1>
            </section>
            <section>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    </div>
  )
}

export default HomeCollectionSwiper