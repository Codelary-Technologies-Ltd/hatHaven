import React from 'react'
import styles2 from '../sass/components/homecollection.module.scss'
import Slider from '../components/HomeCollectionSwiper'
function HomeCollection() {
  return (
    <div className='container'>
        <section className={styles2.homeCollectHead}>
            <h1>Our Collections</h1>
        </section>
        <section>
            <Slider/>
        </section>
    </div>
  )
}

export default HomeCollection