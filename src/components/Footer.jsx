import React from 'react'
import styles from '../sass/components/footer.module.scss'
import twitterIcon from '../assets/png/twitter.png'
import instaIcon from '../assets/png/insta.png'
import {Link} from 'react-router-dom'

function Footer() {
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };
  return (
    <div className={styles.footer}>
        <div className='container'>
            <div className={styles.footContainer}>
                <Link to='/' onClick={scrollToTop}>
                <div className={styles.footHeader}>
                    <h1 className={styles.footHead}>HAT</h1>
                    <h1 className={styles.footHead}>HAVEN</h1>
                </div>
                </Link>
                <div className={styles.footList}>
                    <ul>
                        <Link to='/' className='linksColor' onClick={scrollToTop}>
                            <li className={styles.footListBorder}>Home</li>
                        </Link>
                        <Link to='/shopping-cart' className='linksColor' onClick={scrollToTop}>
                            <li>Shop</li>
                        </Link>
                        <Link to='/category' className='linksColor' onClick={scrollToTop}>
                            <li>Collection</li>
                        </Link>
                        <Link to='/about-us' className='linksColor' onClick={scrollToTop}>
                            <li>About</li>
                        </Link>
                    </ul>
                
                    <ul>
                        <li className={styles.footListBorder}>FAQ</li>
                        <Link to='/contact-us' className='linksColor' onClick={scrollToTop}>
                        <li>Contact</li>
                        </Link>
                        <li>Help</li>
                        <li>Delivery & Returns</li>
                    </ul>
                </div>
                <div className={styles.footersocials}>
                    <div>
                        <a href='mailto:hathaven@gmail.com'>
                            <p>hathaven@gmail.com</p>
                        </a>
                        <div className={styles.footericons}>
                            <a href='https://wa.me/08092860362'>
                                <span>+234 8092860362</span>
                            </a>
                            <a href='https://www.twitter.com'>
                                <img src={twitterIcon}/>
                            </a>
                            <a href="https://www.instagram.com">
                                <img src={instaIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer