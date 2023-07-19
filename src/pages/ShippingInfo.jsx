import ShippingInfoHead from '../components/ShippingInfoHead'
import ShippingInfoForm from '../components/ShippingInfoForm'
import ItemCheckout from '../components/ItemCheckout'
import shippingstyles from '../sass/pages/shippinginfo.module.scss'
function ShippingInfo() {
  return (
    <div>
      <div className={shippingstyles.shippingcontainer}>
        <div className={shippingstyles.infocont}>
          <div>
            <ShippingInfoHead/>
            <ShippingInfoForm/>
          </div>
        </div>
        <ItemCheckout/>
      </div>
    </div>
  )
}

export default ShippingInfo