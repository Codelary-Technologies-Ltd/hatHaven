import React from 'react'
import catStyle from "../sass/components/categoryHeader.module.scss";
import style from "../sass/pages/signup.module.scss";
const SignUp = () => {
  return (
    <div className='container'>
        <div className={style.signUp}>
            <header className={catStyle.categoryHeaderContent}>
                <h1>CREATE AN ACCOUNT</h1>
                <p>
                    Create an account for easy access to all your orders!
                </p>
            </header>
            <section className={style.signUpDetails}>
                <form className={style.signUpDetailsForm}>
                    <label htmlFor="name">First Name</label>
                    <input type="text" name="firstName" id= "firstName" placeholder="James" />
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name="lastName" id= "lastName" placeholder="Doe" />
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" id= "email" placeholder="bill.sanders@example.com" />
                    <label htmlFor="password">Your password</label>
                    <input type="password" name="password" id= "password" placeholder="ZB0mLzLH7CU" />
                    <span className={style.signUpDetailsFormCheck} >
                        <input type="checkbox" name="subscribe" id="subscribe" />
                        <label htmlFor="subscribe">Subscribe to our newsletter</label>
                    </span>
                    <button type="submit">Sign Up</button>
                </form>
                <aside>
                    <p>Already have an account?</p>
                    <a href="#">Log in</a>
                </aside>
            </section>
        </div>
    </div>
  )
}

export default SignUp