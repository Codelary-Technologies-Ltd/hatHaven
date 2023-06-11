import styles from '../sass/components/navbar.module.scss'
import searchicon from '../assets/svg/search.svg'
import profileicon from '../assets/svg/profile.svg'
import carticon from '../assets/svg/cart.svg'
function Navbar() {
    // const [color, setColor] = useState(false)
    // const colorChange = ()=>{
  
    //   window.scrollY > 520 ? setColor(true) : setColor(false)
    // }
  
  
    // window.addEventListener('scroll', colorChange)
  
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
            </div>
        </nav>
    </div>
  )
}

export default Navbar