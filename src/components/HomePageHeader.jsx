import React from 'react'
import styles2 from '../sass/components/homeheader.module.scss'
import img1 from '../assets/png/Rectangle 71.png'
import img2 from '../assets/png/Rectangle 72b.png'
import img3 from '../assets/png/Rectangle 73.png'
import img4 from '../assets/png/Rectangle 74.png'
import img1b from '../assets/png/Rectangle 72.png'
import img2b from '../assets/png/Rectangle 73b.png'
import img3b from '../assets/png/Rectangle 74b.png'
import circle from '../assets/png/Vector 1b.png'
import { Link } from "react-router-dom";

function HomePageHeader() {
  return (
    <div className={styles2.homeHeaderContainer}>
        <header className='container'>
            <div className={styles2.homeHeadFlexContainer}>
                <section className={styles2.homeHeadImgContainer}>
                    <div className={styles2.homeImgContainer}>
                        <img src={img1} alt='t' className={styles2.homeImgContainerImgs}/>
                        <img src={img2} alt='t' className={styles2.homeImgContainerImg}/>
                        <img src={img3} alt='t' className={styles2.homeImgContainerImg}/>
                        <img src={img4} alt='t' className={styles2.homeImgContainerImgs2}/>
                    </div>
                    <div className={styles2.homeImgContainer}>
                        <img src={img1b} alt='t' className={styles2.homeImgContainerImgs}/>
                        <img src={img2b} alt='t' className={styles2.homeImgContainerImg}/>
                        <img src={img3b} alt='t' className={styles2.homeImgContainerImgs}/>
                    </div>
                </section>
                <section className={styles2.homeHeadText}>
                    <aside>
                        <p>
                            Hat-titude: Wear <span className={styles2.headCircleText}>Your <img src={circle}/></span> 
                            <br/>Personality on Your <br/>Head
                        </p>
                        <Link to='/category'>
                        <button className={styles2.homeheadButton}>Shop Now</button>
                        </Link>
                    </aside>
                </section>
            </div>
        </header>
    </div>
  )
}

export default HomePageHeader