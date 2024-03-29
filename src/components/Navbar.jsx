import React, {useState}from 'react'
import styles from '../sass/components/navbar.module.scss'
import searchicon from '../assets/svg/search.svg'
import profileicon from '../assets/svg/profile.svg'
import carticon from '../assets/svg/cart.svg'
import { Link } from "react-router-dom";

function Navbar() {
   
  return (
    <div className={styles.navBar}>
        <nav className='container'>
            <div className={styles.navContainer}>
                <Link to='/'>
                <div className={styles.navHeader}>
                    <h1 className={styles.navHead}>HAT</h1>
                    <h1 className={styles.navHead}>HAVEN</h1>
                </div>
                </Link>
                <div className={styles.navList}>
                    <ul>
                      <Link className='linksColor' to='/'>
                        <li>Home</li>
                      </Link>
                      <Link className='linksColor' to='/category'>
                        <li>Shop</li>
                      </Link>
                      <Link className='linksColor' to='/about-us'>
                        <li>About</li>
                      </Link>
                      <Link className='linksColor' to='/contact-us'>
                        <li>Contact us</li>
                      </Link>
                    </ul>
                </div>
                <div className={styles.navIcons}>
                    <div>
                        <img src={searchicon}/>
                    </div>
                    <div>
                        <img src={profileicon}/>
                    </div>
                    <Link to='/shopping-cart'>
                    <div className={styles.navIcon}>
                          <img src={carticon}/>
                        <p>(0)</p>
                    </div>
                    </Link>
                </div>
                <div className={styles.navHamburger}>
                  <div className={styles.hamIndex}>
                    <input type="checkbox" className={styles.resInp}/>
                      <span className={styles.hamSpan}></span>
                      <span className={styles.hamSpan}></span>
                      <span className={styles.hamSpan}></span>
                    <ul className={styles.hamburger}>
                      <Link to='/'>
                        <li>Home</li>
                      </Link>
                      <Link to='/category'>
                        <li>Shop</li>
                      </Link>
                      <Link to='/about-us'>
                        <li>About</li>
                      </Link>
                      <Link to='/contact-us'>
                        <li>Contact</li>
                      </Link>
                    </ul>
                  </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar