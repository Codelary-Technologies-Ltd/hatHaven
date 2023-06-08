import React from 'react'
import styles2 from '../sass/components/homeseller.module.scss'
import SellerSwiper from '../components/HomeSellerSwiper'
function HomeSeller() {
  return (
    <div className='container'>
        <section className={styles2.homeSellerHead}>
            <h1>Best Sellers</h1>
        </section>
        <section>
            <SellerSwiper/>
        </section>
    </div>
  )
}

export default HomeSeller