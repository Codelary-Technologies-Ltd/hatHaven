import React from 'react'
import shippingfooterstyles from '../sass/components/shippinginfofooter.module.scss'
function ShippingInfoFooter() {
  return (
    <div className={shippingfooterstyles.infofooter}>
        <p>Refund Policy</p>
        <p>Shipping Policy</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
    </div>
  )
}

export default ShippingInfoFooter