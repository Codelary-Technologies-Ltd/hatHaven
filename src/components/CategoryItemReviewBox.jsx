import React from 'react'
import style from "./../sass/components/CategoryItemReviewBox.module.scss"
import catItemReview from './../data/catItemReview.json'
import { VscVerifiedFilled } from 'react-icons/vsc';



function CategoryItemReviewBox() {
    return (
        <div className='container'>
            {
                catItemReview.map((item, index) =>(
                    <React.Fragment key={index}>
                        <div className={style.categoryItemPageReviewBoxContent}>                    
                            <catItemReview key={item._id}/>

                            <div className={style.categoryItemPageReviewBoxContentHeader}> 
                                <h3>{item.name }<VscVerifiedFilled color="green"/></h3>
                                <span> {item.date} </span>
                            </div>
                        
                            <p>{item.reviewmessage} </p>
                            
                            <div>
                                {item.rating}
                            </div>

                        </div>
                        
                    </React.Fragment>
                ))
            }

        </div>

    )
}

export default CategoryItemReviewBox


