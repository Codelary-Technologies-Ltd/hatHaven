import { useState } from "react";
import style from "./../sass/components/categoryItemHeader.module.scss";
import { BiPlus, BiMinus } from 'react-icons/bi';
import BucketHat from '../assets/png/bucketHat.png';



function CategoryItemHeader() {
    const [counter, setCounter] =useState (1);

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
            <div className={style.categoryItemHeader}>
                <nav className={style.categoryItemHeaderTopNav}>
                    <ul>
                        <li>Home  </li> /
                        <li>BucketHat </li> / 
                        <li>Warning Bucket Hat</li>
                    </ul>
                </nav>

                <div className={style.categoryItemHeaderPage}>
                
                    <div className={style.categoryItemHeaderImage}>
                        <img src={BucketHat} alt="" />
                    </div>

                    <form action="">

                        <div className={style.categoryItemHeaderContent}>
                            <div className={style.categoryItemHeaderContentInfo}>
                                <h1 className={style.categoryItemHeaderContentHeader}>Warning Bucket Hat</h1>
                                <p className={style.categoryItemHeaderContentPara}> A bucket hat that features a striking and bold warning design on its body. This unique bucket hat is perfect for those who want to stand out from the crouwd and make a statement.   The warning design adds an edgy and eye catching element to the hat, making it a great accessory for any casual outfit. Made with high quality materials, this bucket hat is both comfortable and durable, making it a great addition to any hat collection.
                                </p>
                            </div>
                            
                            <div className={style.categoryItemHeaderContentPrice}>
                                <h1 className={style.categoryHeaderContentHeader}>$14.90</h1>
                                <p className={style.categoryHeaderContentPara}>
                                    (10) Rating
                                </p>
                            </div>

                            <div className={style.categoryItemHeaderContentColor}>
                                <p className={style.categoryHeaderContentPara}>
                                    Color:
                                </p>

                                <div className={style.categoryItemHeaderContentColorImg}>
                                    <div></div>
                                </div>
                            </div>

                            <div className={style.categoryItemHeaderContentAmount}>                           
                                <p className={style.categoryHeaderContentPara}>
                                    Amount:
                                </p>

                                <div className={style.categoryItemHeaderContentAmountBox}>                             
                                    <BiMinus onClick={DecreaseAmount} />
                                    <p>{counter}</p>
                                    <BiPlus onClick={IncreaseAmount} />
                                </div>
                            </div>
                            
                            <div className={style.categoryItemHeaderContentButton}>                   
                                <button>Add to Cart</button>
                            </div>

                        </div>

                    </form>

                </div>

                
            </div>

        </div>
    )
}

export default CategoryItemHeader;

