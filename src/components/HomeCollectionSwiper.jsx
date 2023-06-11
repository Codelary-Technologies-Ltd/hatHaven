import React from 'react'
import styles2 from '../sass/components/homecollection.module.scss'
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import pic from '../assets/png/categories-of -hats/beanie/beanie.jpg'
import pic2 from '../assets/png/categories-of -hats/Balaclava hat/balaclava.jpg'
import pic3 from '../assets/png/categories-of -hats/fedora/fedora.jpg'
import pic4 from '../assets/png/categories-of -hats/straw-hat/strawhat.jpg'
import pic5 from '../assets/png/categories-of -hats/bucket hat/bucket hat.jpg'
import pic6 from '../assets/png/categories-of -hats/cowboy-hat/cowboy-4.jpg'
import pic7 from '../assets/png/categories-of -hats/bucket hat/buckethat7.jpg'


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
                <SwiperSlide className={styles2.collections}>
                    <img src={pic} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic2} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic3} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic4} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic5} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic6} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic7} style={{width: '200px', height: '250px'}}/>
                </SwiperSlide>
            </Swiper>
            </section>
        </div>
    </div>
  )
}

export default HomeCollectionSwiper