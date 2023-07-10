import ShippingInfoHead from '../components/ShippingInfoHead'
import ShippingInfoForm from '../components/ShippingInfoForm'
import styles from '../sass/components/shippinginfocont.module.scss'
function ShippingInfo() {
  return (
    <div className={styles.infocont}>
        <div>
            <ShippingInfoHead/>
            <ShippingInfoForm/>
        </div>
    </div>
  )
}

export default ShippingInfo