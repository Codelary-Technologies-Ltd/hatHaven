import React from 'react'
import styles from '../sass/components/footer.module.scss'
import twitterIcon from '../assets/png/twitter.png'
import instaIcon from '../assets/png/insta.png'
function Footer() {
  return (
    <div className={styles.footer}>
        <div className='container'>
            <div className={styles.footContainer}>
                <div className={styles.footHeader}>
                    <h1 className={styles.footHead}>HAT</h1>
                    <h1 className={styles.footHead}>HAVEN</h1>
                </div>
                <div className={styles.footList}>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Collection</li>
                        <li>About</li>
                    </ul>
                
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <li>Delivery & Returns</li>
                    </ul>
                </div>
                <div className={styles.footersocials}>
                    <div>
                        <p>hathaven@gmail.com</p>
                        <div className={styles.footericons}>
                            <p>+234 8092860362</p>
                            <img src={twitterIcon}/>
                            <img src={instaIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer