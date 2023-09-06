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
import { useEffect, useState } from "react";

function HomeCollectionSwiper() {
  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
  const [view, setView] = useState(4);
  const [space, setSpace] = useState(50);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const watchWindowWidth = () => {
      setWindowWidth(window.innerWidth);

      //set the view
      if (window.innerWidth <= 600) {
        setView(2);
      } else if (window.innerWidth <= 900) {
        setView(3);
      } else if (window.innerWidth <= 1440) {
        setView(4);
      }

      //set the space
      if (window.innerWidth < 480) {
        setSpace(20);
      } else if (window.innerWidth <= 900) {
        setSpace(35);
      }
    };

    window.addEventListener("resize", watchWindowWidth);

    //set the view
    if (windowWidth <= 600) {
      setView(2);
    } else if (windowWidth <= 900) {
      setView(3);
    }

    //set the space
    if (windowWidth < 480) {
      setSpace(20);
    } else if (windowWidth <= 900) {
      setSpace(35);
    }

    //cleanup the side effect for the use effect
    return () => {
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  // const space = setSpacef();
  // const view = setPerView();

  return (
    <div>
      <div>
        <section>
          <Swiper
            spaceBetween={space}
            // slidesPerView={4}
            slidesPerView={view}
            slideClass={styles2.slideT}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {pictures.map((slide, index) => (
              <SwiperSlide key={index} className={styles2.collections}>
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
