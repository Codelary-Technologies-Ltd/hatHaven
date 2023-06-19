import React from "react";
import style from "./../sass/pages/contactus.module.scss";
import catStyle from "../sass/components/categoryHeader.module.scss";
import { ReactComponent as Telephone } from './../assets/svg/Telephone.svg'
import { ReactComponent as Email } from './../assets/svg/Email.svg'
import { ReactComponent as Location } from './../assets/svg/Location.svg'
const ContactUs = () => {
  return (
    <div className="container">
      <nav className={catStyle.categoryHeaderTopNav}>Home / Contact Us</nav>
      <div className={style.contactUs}>
            <header className={catStyle.categoryHeaderContent}>
            <h1>CONTACT US</h1>
            <p>
                We're always happy to hear from our customers. If you have any
                questions or feedback, please don't hesitate to reach out to us.
            </p>
            </header>
            <section className={style.contactUsDetails}>
                <div>
                    <aside>
                        <Telephone />
                        <h1>Telephone</h1>
                    </aside>
                    <span>
                        <p>(239) 555-0108</p>
                        <p>(603) 555-0123</p>
                    </span>
                </div>
                <div className={style.contactUsDetailsMid} >
                    <aside>
                            <Email />
                            <h1>Email Us</h1>
                    </aside>
                    <p>vuhaithuongnute@gmail.com</p>
                </div>
                <div>
                    <aside>
                            <Location />
                            <h1>Location</h1>
                    </aside>
                    <p>Number 10 ijaoye street jibowu, Lagos State</p>
                </div>
            </section>
            <section className={style.contactUsFillDetails}>
                <header>
                    <h1>CONTACT US</h1>
                    <p>*Required fields</p>
                </header>
                <form className={style.contactUsFillDetailsForm}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id= "name" placeholder="Enter name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id= "email" placeholder="Enter email" />
                    <label htmlFor="phone">Phone Number</label>
                    <input
                    type="tel"
                    name="phone"
                    id= "phone" placeholder="Enter phone number"
                    />
                    <label htmlFor="details">What’s on your mind?</label>
                    <input type="text" name="details" id= "details" placeholder="Details" />
                    <button type="submit">Submit</button>
                </form>
            </section>
      </div>
    </div>
  );
};

export default ContactUs;
