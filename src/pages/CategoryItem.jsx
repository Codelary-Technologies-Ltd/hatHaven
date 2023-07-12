import { useState } from "react";
import style from "./../sass/pages/CategoryItem.module.scss"
import CategoryItemReviewBox from "../components/CategoryItemReviewBox";
import BucketHat from '../assets/png/bucketHat.png';
import { BiPlus, BiMinus } from 'react-icons/bi';



function CategoryItem() {
    const [counter, setCounter] = useState (1);

    //Increase Amount
    const IncreaseAmount = () =>{
        setCounter (count => count +1)
    };

    //Decrease Amount
    const DecreaseAmount = () =>{
        if (counter > 1){
            setCounter (count => count -1)
        }
    };

    return (
        <div className='container' >
            <div className={style.categoryItemPage}>
                <nav className={style.categoryItemPageTopNav}>
                    <ul>
                        <li>Home  </li> /
                        <li>BucketHat </li> / 
                        <li>Warning Bucket Hat</li>
                    </ul>
                </nav>

                
                <div className={style.categoryItemPageContainer}>
                    <div className={style.categoryItemPageImage}>
                        <img src={BucketHat} alt="" />
                    </div>


                    <div className={style.categoryItemPageContent}>
                        
                        <form action="">
                            <div className={style.categoryItemPageContentInfo}>
                                <h1 className={style.categoryItemPageContentHeader}>Warning Bucket Hat</h1>
                                <p className={style.categoryItemPageContentPara}> A bucket hat that features a striking and bold warning design on its body. This unique bucket hat is perfect for those who want to stand out from the crouwd and make a statement.   The warning design adds an edgy and eye catching element to the hat, making it a great accessory for any casual outfit. Made with high quality materials, this bucket hat is both comfortable and durable, making it a great addition to any hat collection.
                                </p>
                            </div>
                            
                            <div className={style.categoryItemPageContentPrice}>
                                <h1 className={style.categoryItemPageContentHeader}>$14.80</h1>
                                <p className={style.categoryItemPageContentPara}>
                                    (10) Rating
                                </p>
                            </div>

                            <div className={style.categoryItemPageContentColor}>
                                <p className={style.categoryPageContentPara}>
                                    Color:
                                </p>

                                <div className={style.categoryItemPageContentColorImg}>
                                    <div></div>
                                </div>
                            </div>

                            <div className={style.categoryItemPageContentAmount}>                           
                                <p className={style.categoryPageContentPara}>
                                    Amount:
                                </p>

                                <div className={style.categoryItemPageContentAmountBox}>                             
                                    <BiMinus onClick={DecreaseAmount} />
                                    <p>{counter}</p>
                                    <BiPlus onClick={IncreaseAmount} />
                                </div>
                            </div>
                            
                            <div className={style.categoryItemPageContentButton}>                   
                                <button>Add to Cart</button>
                            </div>
                        </form>
                    </div>         
                </div>


                <div className={style.categoryItemPageReview}>
                    <div className={style.categoryItemPageReviewForm}>

                        <form action="">
                            <h1> REVIEWS</h1>

                            <h1>4.7</h1>

                            <div>
                                star  star star
                            </div>

                            <h2>BASED ON 6 REVIEWS</h2>

                            <div className={style.categoryItemPageReviewButton}>                   
                                <button>WRITE A REVIEW</button>
                            </div>

                        </form>

                    </div>

            
                    <div className={style.categoryItemPageReviewBox}>
                        <CategoryItemReviewBox/>
                    </div>
                
                </div>

                <div >
                    <section className={style.categoryItemPageSwiper}>
                        {/* <CategoryItemSlider /> */}
                    </section>
                </div>

            </div>

        </div>
    )
}

export default CategoryItem;

