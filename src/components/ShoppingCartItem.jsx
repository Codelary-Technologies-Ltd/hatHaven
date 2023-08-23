import React from 'react'
import styles2 from '../sass/components/shoppingcartitem.module.scss'
import hat from '../assets/png/bucketHat2.png'
import deleteicon from '../assets/svg/delete.svg'

function ShoppingCartItem() {
  return (
    <div className={styles2.shopCartDetails}>
        <div className={styles2.shopCartHeadHidden}>
            <p className={styles2.shopCartHidden}>Product</p>
            <div className={styles2.shopImgDiv}>
                <img src={hat} alt='item-pic'className={styles2.shopCartImg}/>
                <div>
                    <h4>Warning Bucket Hat</h4>
                    <p>orange</p>
                </div>
                <img src={deleteicon} alt='item-pic'className={styles2.cartDeleteIcon}/>
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
        <p className={styles2.shopDetails2p}>$14.50</p>
        <section className={styles2.shopDetailsHiddenSection}>
            <div className={styles2.shopDetails2Hidden}>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <div className={styles2.shopDetails2Div}>
                <div className={styles2.shopMobileDetails}>
                    <p>$14.50</p>
                    <div className={styles2.shoppedMobileNumber}>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </div>
                </div>
                <p>$14.50</p>
            </div>
        </section>
    </div>
  )
}

export default ShoppingCartItem