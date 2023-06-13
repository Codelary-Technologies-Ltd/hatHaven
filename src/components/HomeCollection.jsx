import React from "react";
import styles2 from "../sass/components/homecollection.module.scss";
import Slider from "../components/HomeCollectionSwiper";
function HomeCollection() {
  return (
    <div className="container">
      <section className={styles2.homeCollect}>
          <h1 className={styles2.homeCollectHead}>Our Collections</h1>
          <section>
            <Slider />
          </section>
      </section>
    </div>
  );
}

export default HomeCollection;
