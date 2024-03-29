import React, { useState, useMemo } from 'react'
import Select, { components}  from 'react-select'
import countryList from 'react-select-country-list'
import backToCart from '../assets/svg/arrow-left.svg'
import states from "../data/states.json";
import ShippingHeader from '../components/ShippingHeader'
import ItemCheckout from '../components/ItemCheckout'
import paypal from '../assets/png/paypal-logo.png'
import shippingstyles from '../sass/pages/shippinginfo.module.scss'
import ShippingFooter from '../components/ShippingFooter';
import {Link} from 'react-router-dom'
function ShippingInfo() {
      const [value, setValue] = useState('')
      const options = useMemo(() => countryList().getData(), [])
      const place = [...states]
      const changeHandler = value => {
      setValue(value)
    }
    const Placeholder = (props) => {
      return <components.Placeholder {...props} />;
    };
  return (
    <div>
      <div className={shippingstyles.shippingcontainer}>
        <div className={shippingstyles.infocont}>
          <div>
            <div>
              <ShippingHeader/>
                <section className={shippingstyles.infocontain}>
                  <div className={shippingstyles.infohrdiv}>
                    <hr/>
                    <p>Express Checkout</p>
                    <hr/>
                  </div>
                  <div className={shippingstyles.infopaypal}>
                      <img src={paypal} alt='paypal-logo'/>
                  </div>
                  <div className={shippingstyles.infohrdiv2}>
                      <hr/>
                      <p>Or</p>
                      <hr/>
                  </div>
                  <div>
                    <form>
                      <section className={shippingstyles.infoform}>
                        <p>Contact Information</p>
                        <input placeholder='First name' type='text'/>
                        <div className={shippingstyles.infocheckbox}>
                            <input type='checkbox'/>
                            <p>Email me with news and offers</p>
                        </div>
                        <p>Shipping Address- ENGLISH required for shipping!</p>
                        <div>
                            <Select 
                            components={{ Placeholder }}
                            placeholder={'Country/Region'}
                            options={options} 
                            value={value} 
                            onChange={changeHandler} 
                            styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                            
                                  backgroundColor:'white',
                                  outline:'none',
                                  border:'1px solid black',
                                  padding: '10px 0'
                                }),
                              }}
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                  ...theme.colors,
                                  primary25: '#28bc9c',
                                  primary: 'black'
                                },
                              })}
                            />
                        </div>
                        <div className={shippingstyles.infoinputflex}>
                            <input placeholder='First name' type='text'/>
                            <input placeholder='Last name' type='text'/>
                        </div>
                        <div className={shippingstyles.infoinputflex2}>
                            <input placeholder='Address' type='text'/>
                            <input placeholder='Apartment, suite, etc (optional)' type='text'/>
                        </div>
                        <div className={shippingstyles.infoinputflex3}>
                            <input placeholder='City' type='text'/>
                            <div className={shippingstyles.infostateselect}>
                              <div>
                                <Select
                                  value={place.value}
                                  options={place}
                                  defaultValue={{label:'State', value:''}}
                                  styles={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                
                                      backgroundColor:'white',
                                      outline:'none',
                                      border:'1px solid black'
                                    }),
                                  }}
                                  theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                      ...theme.colors,
                                      primary25: '#28bc9c',
                                      primary: 'black'
                                    },
                                  })}
                                />
                              </div>
                            </div>
                            <input placeholder='Postal code' type='number'/>
                        </div>
                        <div className={shippingstyles.infoinputflex4}>
                            <input placeholder='Phone' type='number'/>
                        </div>
                      </section>
                      <Link to='/shopping-cart'>
                      <a className={shippingstyles.infobackarrow}>
                          <img src={backToCart} alt='back'/>
                          <p className={shippingstyles.infobackbutton}>Return to cart</p>
                      </a>
                      </Link>
                      <Link to='/shipping-payment'>
                      <div>
                          <button className={shippingstyles.shipInfoButton}>Continue to Shipping</button>
                      </div>
                      </Link>
                    </form>
                    <div className={shippingstyles.infofooterdiv}>
                      <ShippingFooter/>
                    </div>
                  </div>
                </section>
            </div>
          </div>
        </div>
        <ItemCheckout/>
      </div>
    </div>
  )
}

export default ShippingInfo