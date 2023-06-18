import style from "./../sass/components/categoryItemReview.module.scss";
import { VscVerifiedFilled } from 'react-icons/vsc'




function CategoryItemReview() {
    return (

        <div className='container' >

            <div className={style.categoryItemReviewPage}>
                <div className={style.categoryItemReviewForm}>
                    <form action="">
                        <h1> REVIEWS</h1>

                        <h1>4.7</h1>
                  
                        star star star

                        <h2>BASED ON 6 REVIEWS</h2>

                        <div className={style.categoryItemReviewButton}>                   
                            <button>WRITE A REVIEW</button>
                        </div>

                    </form>
                </div>

            
                <div className={style.categoryItemReviewBox}>
                    <section className={style.categoryItemReviewBoxContent}>
                        <div className={style.categoryItemReviewBoxContentHeader}>
                            <h3>Esther Howard <VscVerifiedFilled color="green"/></h3> 
                            <span>10/02/23</span>
                        </div>
                        <p className={style.categoryItemReviewBoxContentPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur cumque tenetur nihil ab illum saepe non omnis iure accusamus nisi aut maxime quos est explicabo itaque, enim et voluptatem!</p>

                        star star star
                    </section>
                    
                    <section className={style.categoryItemReviewBoxContent}>
                        <div className={style.categoryItemReviewBoxContentHeader}>
                            <h3> Jacob Jones <VscVerifiedFilled color="green"/></h3> 
                            <span>10/02/23</span>
                        </div>
                        <p className={style.categoryItemReviewBoxContentPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur cumque tenetur nihil ab illum saepe non omnis iure accusamus nisi aut maxime quos est explicabo itaque, enim et voluptatem!</p>

                        star star star

                    </section>

                </div>

                {/* {1, 2, 3, 4, 5, 7, 8} */}
                
            </div>

        </div>
    )
}

export default CategoryItemReview