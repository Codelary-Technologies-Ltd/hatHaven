import React, {useState}from 'react'
import styles from '../sass/components/navbar.module.scss'
import searchicon from '../assets/svg/search.svg'
import profileicon from '../assets/svg/profile.svg'
import carticon from '../assets/svg/cart.svg'
import { slide as Menu } from 'react-burger-menu';
function Navbar() {
    
    const hamStyles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '34px',
          height: '22px',
          right: '20px',
          top: '20px',
        },
        bmBurgerBars: {
            background: '#FFFFFF',
          },
          bmCrossButton: {
            height: '24px',
            width: '24px',
          },
          bmCross: {
            background: '#FFFFFF',
          },
          bmMenuWrap: {
            position: 'fixed',
            height: '60%',
            right: '0px',
            width: '300px',
            transform: 'translate3d(100%, 0px, 0px)',
            transition: 'all 0.5s ease 0s',
            top: '0px'
          },
          bmMenu: {
            background: '#222222',
            padding: '1em .5em 0',
            fontSize: '1em',
          },
          bmMorphShape: {
            fill: '#FFFFFF',
          },
          bmItemList: {
            color: 'white',
            padding: '0.8em',
          },
          bmItem: {
            display: 'block',
            textDecoration: 'none',
            marginBottom: '10px',
            color: 'white',
          },
          bmOverlay: {
            display: 'none'
          }
        };

  return (
    <div className={styles.navBar}>
        <nav className='container'>
            <div className={styles.navContainer}>
                <div className={styles.navHeader}>
                    <h1 className={styles.navHead}>HAT</h1>
                    <h1 className={styles.navHead}>HAVEN</h1>
                </div>
                <div className={styles.navList}>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className={styles.navIcons}>
                    <div>
                        <img src={searchicon}/>
                    </div>
                    <div>
                        <img src={profileicon}/>
                    </div>
                    <div className={styles.navIcon}>
                        <img src={carticon}/>
                        <p>(0)</p>
                    </div>
                </div>
                <div className={styles.navHamburger}>
                <Menu styles={hamStyles}>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/shop">Shop</a>
                    <a className="menu-item" href="/about">About</a>
                    <a className="menu-item" href="/contact">Contact Us</a>
                </Menu>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar