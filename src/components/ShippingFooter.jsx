import React from 'react'
import shippingfooterstyles from '../sass/components/shippingfooter.module.scss'
function ShippingFooter() {
  return (
    <div className={shippingfooterstyles.shippingfootercontainer}>
      <div className={shippingfooterstyles.shippingfooter}>
        <a href=''><p>Refund Policy</p></a>
        <a href=''><p>Shipping Policy</p></a>
        <a href=''><p>Privacy Policy</p></a>
        <a href=''><p>Terms of service</p></a>
      </div>
    </div>
  )
}

export default ShippingFooter