import React from 'react'
import style from '../sass/pages/shippingPaymentMethod.module.scss'
import ShippingHead from './../components/ShippingHead'
import { ReactComponent as ArrowLeft } from './../assets/svg/arrow-left.svg'
import ItemCheckout from './../components/ItemCheckout'
const ShippingPaymentMethod = () => {
  return (
    <div className={style.shipping}>
        <div className={style.shippingPay}>
            <ShippingHead />
            <section className={style.shippingPayMethod}>
                <section className={style.shippingPayMethodContact}>
                    <div className={style.shippingPayMethodContactEmail}>
                        <div>
                            <p><span>Contact:</span> jackson.graham@example.com</p>
                            <p>Change</p>
                        </div>
                    </div>
                    <div className={style.shippingPayMethodShip}>
                    <div>
                        <p><span>Ship to:</span> 3891 Ranchview Dr. Richardson, California 62639</p>
                        <p>Change</p>
                    </div>
                    </div>
                </section>

                <h2>Shipping Method</h2>

                <section className={style.shippingPayMethodAddr}>
                    <div>
                        <div className={style.shippingPayMethodAddrRadio}>
                            <input type="radio" name="shippingMethod" id="standard" />
                            <label htmlFor="standard">Standard International Shipping</label>
                        </div>
                        <span>$15.00</span>
                    </div>
                    <div>
                        <div className={style.shippingPayMethodAddrRadio}>
                            <input type="radio" name="shippingMethod" id="express" />
                            <label htmlFor="express">DHL Express Worldwide</label>
                        </div>
                        <span>$15.00</span>
                    </div>
                </section>

                <a href="#" className={style.shippingPayMethodReturn}>
                    <ArrowLeft />
                    Return to information
                </a>

            </section>
        </div>
        <ItemCheckout />
    </div>
  )
}

export default ShippingPaymentMethod