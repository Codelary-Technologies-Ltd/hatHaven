import styles from '../sass/components/homenews.module.scss'
import pic from '../assets/png/news1.png'
import { Link } from "react-router-dom";


function HomePageNews() {
  return (
    <div className={styles.homeContainer}>
        <div className='container'>
            <div className={styles.homenewsContainer}>
                <div className={styles.newsContainer}>
                    <img src={pic}/>
                    <div className={styles.homeText}>
                        <div className={styles.homeTextWrap}>
                            <h3>The Hat Insider:</h3>
                            <p>Be the First to Know About Our New Arrivals</p>
                            <div className={styles.homeinputContainer}>
                                <div className={styles.homeInputWrap}>
                                    <input placeholder='Email' className={styles.homenewsInput} type='email'/>
                                    <Link to='/sign-up'>
                                        <button className={styles.homenewsButton}>Sign Up</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePageNews