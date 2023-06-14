import styles2 from '../sass/components/shoppinghead.module.scss'
import hat from '../assets/png/bucketHat2.png'

function ShoppingHeader() {
  return (
    <div className={styles2.shoppingHead}>
        <div className='container'>
            <div className={styles2.shoph1}>
                <h1>CART</h1>
            </div>
            <section className={styles2.shopCartHead}>
                <p>Product</p>
                <div className={styles2.shopCartHead2}>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>
                <p>Total</p>
            </section>
            <section className={styles2.shopCartDetails}>
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
            </section>
            <section className={styles2.shopCartCheckout}>
                <p className={styles2.shopCartCheckp1}>Subotal: &nbsp; &nbsp; $14.90</p>
                <p className={styles2.shopCartCheckp2}>Shipping & taxes calculated at checkout</p>
                <button className={styles2.shopCartCheckButton}>Checkout</button>
            </section>
        </div>
    </div>
  )
}

export default ShoppingHeader