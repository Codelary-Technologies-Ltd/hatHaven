import React from 'react'
import styles1 from '../sass/components/hometestimony.module.scss'
import Testbg from '../assets/png/quotes.png'
function HomePageTestimonial() {
  return (
    <div className={styles1.hometestContainer}>
        <div className='container'>
            <div className={styles1.hometestismonyWrap}>
                <div className={styles1.testimonyTextWrapper}>
                    <section className={styles1.testimonyOne}>
                        <div>
                            <img src={Testbg} alt='bg' className={styles1.testContainOnebg}/>
                        </div>
                        <div className={styles1.testimonyHeadDiv}>
                            <h2>Testimonials</h2>
                            <p>See what our customers</p>
                            <p>are saying</p>
                        </div>
                    </section>
                    <section className={styles1.testContainTwo}>
                            <p className={styles1.testTwoHead}>Sarah Johnson</p>
                            <hr className={styles1.testTwoHeadhr}/>
                        <p>I recently bought a beanie from Hat Haven and it's been my go-to accessory ever since. The quality is top-notch and it keeps me warm even on the coldest days.Thanks, Hat Haven!</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageTestimonial