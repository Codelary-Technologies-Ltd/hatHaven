import styles2 from '../sass/pages/shoppingcart.module.scss'
import ShoppingCartItem from '../components/ShoppingCartItem'
import {Link} from 'react-router-dom'
function ShoppingCart() {
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
            <section className={styles2.shopCartBorder}>
                <ShoppingCartItem/>
            </section>
            <section className={styles2.shopCartCheckout}>
                <p className={styles2.shopCartCheckp1}>Subotal: &nbsp; &nbsp; $14.90</p>
                <p className={styles2.shopCartCheckp2}>Shipping & taxes calculated at checkout</p>
                <Link to='/shipping-info'>
                    <button className={styles2.shopCartCheckButton}>Checkout</button>
                </Link>
            </section>
        </div>
    </div>
  )
}

export default ShoppingCart