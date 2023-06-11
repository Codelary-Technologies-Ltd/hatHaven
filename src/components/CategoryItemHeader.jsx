import { useState } from "react";
import style from "./../sass/components/categoryItemHeader.module.scss";
import BucketHat from '../assets/png/bucketHat.png'
import Rectangle1 from '../assets/png/Rectangle1.png'
import Rectangle2 from '../assets/png/Rectangle2.png'
import Rectangle3 from '../assets/png/Rectangle3.png'
import Rectangle4 from '../assets/png/Rectangle4.png'
import Rectangle5 from '../assets/png/Rectangle5.png'
import addicon from '../assets/png/add.png'
import minusicon from '../assets/png/minus.png'

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
                    <p>Home / BucketHat / Warning Bucket Hat</p>
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
                                    <img src={Rectangle1} alt="" />
                                    <img src={Rectangle2} alt="" />
                                    <img src={Rectangle3} alt="" />
                                    <img src={Rectangle4} alt="" />
                                    <img src={Rectangle5} alt="" />
                                </div>
                            </div>

                            <div className={style.categoryItemHeaderContentAmount}>                           
                                <p className={style.categoryHeaderContentPara}>
                                    Amount:
                                </p>

                                <div className={style.categoryItemHeaderContentAmountBox}>
                                    <img src={minusicon} onClick={DecreaseAmount}  style={{width:'10px'}}/>                               
                                    <p>{counter}</p>
                                    <img src={addicon}  onClick={IncreaseAmount}  style={{width:'10px'}}/>
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

