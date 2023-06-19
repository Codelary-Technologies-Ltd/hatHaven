import React from 'react'
import styles2 from '../sass/components/shoppingcartitem.module.scss'
import hat from '../assets/png/bucketHat2.png'

function ShoppingCartItem() {
  return (
    <div className={styles2.shopCartDetails}>
        <div className={styles2.shopImgDiv}>
            <img src={hat} alt='item-pic'className={styles2.shopCartImg}/>
            <div>
                <h4>Warning Bucket Hat</h4>
                <p>orange</p>
            </div>
        </div>
        <div className={styles2.shopDetails2}>
            <p>$14.50</p>
            <div className={styles2.shoppedItemNumber}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
        </div>
        <p>$14.50</p>
    </div>
  )
}

export default ShoppingCartItem