import React from 'react'
import shippingfooterstyles from '../sass/components/shippingfooter.module.scss'
function ShippingFooter() {
  return (
    <div className={shippingfooterstyles.shippingfootercontainer}>
      <div className={shippingfooterstyles.shippingfooter}>
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
      </div>
    </div>
  )
}

export default ShippingFooter