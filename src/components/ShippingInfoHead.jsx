import styles2 from '../sass/components/shippinginfohead.module.scss'
import paypal from '../assets/png/paypal-logo.png'
import backArrow from '../assets/svg/arrow-left.svg'
import arrowRight from '../assets/svg/arrow-right.svg'
function ShippingInfoHead() {
  return (
    <div className={styles2.shippingInfoHeadCont}>
        <header className={styles2.infoHeader}>
            <h1 className={styles2.infoHead}>HAT</h1>
            <h1 className={styles2.infoHead}>HAVEN</h1>
        </header>
        <section className={styles2.infopcont}>
            <div className={styles2.infop}>
                <span className={styles2.infospan}>Cart</span>
                <img src={arrowRight}/>
                Information
                <img src={arrowRight}/>
                Shipping
                <img src={arrowRight}/>
                Payment
            </div>
        </section>
        <div className={styles2.infohrdiv}>
            <hr/>
            <p>Express Checkout</p>
            <hr/>
        </div>
        <div className={styles2.infopaypal}>
            <img src={paypal} alt='paypal-logo'/>
        </div>
        <div className={styles2.infohrdiv2}>
            <hr/>
            <p>Or</p>
            <hr/>
        </div>
    </div>
  )
}

export default ShippingInfoHead