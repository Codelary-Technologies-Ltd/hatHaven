import styles from '../sass/components/homenews.module.scss'
import pic from '../assets/png/news1.png'

function HomePageNews() {
  return (
    <div className={styles.homeContainer}>
        <div className='container'>
            <div className={styles.homenewsContainer}>
                <div className={styles.newsContainer}>
                    <img src={pic}/>
                    <div className={styles.homeText}>
                        <div>
                            <h3>The Hat Insider:</h3>
                            <p>Be the First to Know About Our New Arrivals</p>
                            <div className={styles.homeinputContainer}>
                            <input placeholder='Email' className={styles.homenewsInput}/>
                            <button className={styles.homenewsButton}>Sign Up</button>
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