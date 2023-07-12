import ShippingInfoCont from '../components/ShippingInfoCont'
import ItemCheckout from '../components/ItemCheckout'
import shippingstyles from '../sass/pages/shippinginfo.module.scss'
function ShippingInfo() {
  return (
    <div>
        <div className={shippingstyles.shippingcontainer}>
            <ShippingInfoCont/>
            <ItemCheckout/>
        </div>
    </div>
  )
}

export default ShippingInfo