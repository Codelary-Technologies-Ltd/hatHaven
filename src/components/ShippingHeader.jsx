import styles2 from '../sass/components/shippingheader.module.scss'
import arrowRight from '../assets/svg/arrow-right.svg'
function ShippingHeader() {
  return (
    <div className={styles2.shippingHeadCont}>
        <header className={styles2.shippingHeader}>
            <h1 className={styles2.shippingHead}>HAT</h1>
            <h1 className={styles2.shippingHead}>HAVEN</h1>
        </header>
        <section className={styles2.shippingheadpcont}>
            <div className={styles2.shippingheadp}>
                <span className={styles2.shippingheadspan}>Cart</span>
                <img src={arrowRight}/>
                Information
                <img src={arrowRight}/>
                Shipping
                <img src={arrowRight}/>
                Payment
            </div>
        </section>
    </div>
  )
}

export default ShippingHeader