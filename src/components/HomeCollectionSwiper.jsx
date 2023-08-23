import React from "react";
import styles2 from "../sass/components/homecollection.module.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { pictures } from "../data/picture";

function HomeCollectionSwiper() {
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
  
  const perView = ()=>{
    if (window.innerWidth <= 600) 
    {return 2}
    else if (window.innerWidth <= 900){ return 3}
    else return 4
  }
  const space = ()=>{
    if (window.innerWidth < 480) 
    {return 20}
    else if (window.innerWidth <= 900){ return 35}
    else return 50
  }
  return (
    <div>
      <div>
        <section>
          <Swiper
            spaceBetween={space()}
            // slidesPerView={4}
            slidesPerView={perView()}
            slideClass={styles2.slideT}
            speed={3000}
            loop={true}
            EffectFade={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {pictures.map((slide, index) => (
                <SwiperSlide
                  key={slide.id ? slide.id : index}
                  className={styles2.collections}
                  
                >
                  <img src={slide?.thumbnail} alt={slide?.title} />
                </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}

export default HomeCollectionSwiper;
