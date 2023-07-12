import React, { useState, useMemo } from 'react'
import Select, { components}  from 'react-select'
import countryList from 'react-select-country-list'
import styles2 from '../sass/components/shippinginfoform.module.scss'
import backToCart from '../assets/png/arrow-left.png'
import states from "../data/states.json";


function ShippingInfoForm() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
    setValue(value)
  }
  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };
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
                    <div className={styles2.infoinputflex}>
                        <input placeholder='First name' type='text'/>
                        <input placeholder='Last name' type='text'/>
                    </div>
                    <div className={styles2.infoinputflex2}>
                        <input placeholder='Address' type='text'/>
                        <input placeholder='Apartment, suite, etc (optional)' type='text'/>
                    </div>
                    <div className={styles2.infoinputflex3}>
                        <input placeholder='City' type='text'/>
                        <div className={styles2.infostateselect}>
                          <div>
                            <select>
                              <option value='' selected>State</option>
                              {states.map((state)=>{
                                return(
                                  <option value={state.code}>{state.name}</option>
                                )
                              })}
                            </select>
                          </div>
                        </div>
                        <input placeholder='Postal code' type='number'/>
                    </div>
                    <div className={styles2.infoinputflex4}>
                        <input placeholder='Phone' type='number'/>
                    </div>
                </section>
                <a href='back' className={styles2.infobackarrow}>
                    <img src={backToCart} alt='back'/>
                    <p className={styles2.infobackbutton}>Return to cart</p>
                </a>
                <div>
                    <button className={styles2.shipInfoButton}>Continue to Shipping</button>
                </div>
            </form>
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