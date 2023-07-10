import styles2 from '../sass/components/shippinginfoform.module.scss'

function ShippingInfoForm() {
  return (
    <div>
        <div>
            <form>
                <section className={styles2.infoform}>
                    <p>Contact Information</p>
                    <input placeholder='First name' type='text'/>
                    <div className={styles2.infocheckbox}>
                        <input type='checkbox'/>
                        <p>Email me with news and offers</p>
                    </div>
                    <p>Shipping Address- ENGLISH required for shipping!</p>
                    <div className={styles2.infodivborder}>
                        <p>Country/Region</p>
                    </div>
                    <div>
                        <input placeholder='First name' type='text'/>
                        <input placeholder='Last name' type='text'/>
                    </div>
                    <div className={styles2.infoinputflex}>
                        <input placeholder='Address' type='text'/>
                        <input placeholder='Apartment, suite, etc (optional)' type='text'/>
                    </div>
                    <div>
                        <input placeholder='City' type='text'/>
                        <input placeholder='State' type='text'/>
                        <input placeholder='Postal code' type='number'/>
                    </div>
                    <div className={styles2.infoinputflex}>
                        <input placeholder='Phone' type='number'/>
                    </div>
                </section>
                <p>Return to cart</p>
                <div>
                    <button className={styles2.shipInfoButton}>Continue to Shipping</button>
                </div>
            </form>
            <div className={styles2.infobottomborder}>

            </div>
            <div className={styles2.infofooter}>
                <p>Refund Policy</p>
                <p>Shipping Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of service</p>
            </div>
        </div>
    </div>
  )
}

export default ShippingInfoForm