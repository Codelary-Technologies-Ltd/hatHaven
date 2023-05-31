import React from 'react'
import styles1 from '../sass/components/hometestimony.module.scss'

function HomePageTestimonial() {
  return (
    <div className={styles1.hometestContainer}>
        <div className='container'>
            <div className={styles1.hometestContain}>
                <div className={styles1.testContain}>
                    <section className={styles1.testContainOne}>
                        <div>
                            <h2>Testimonials</h2>
                            <p>See what our customers</p>
                            <p>are saying</p>
                        </div>
                    </section>
                    <section className={styles1.testContainTwo}>
                        <div className={styles1.testTwoHead}>
                            <h2>Sarah Johnson</h2>
                        </div>
                        <p>I recently bought a beanie from Hat Haven and it's been my go-to accessory ever since. The quality is top-notch and it keeps me warm even on the coldest days.Thanks, Hat Haven!</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageTestimonial