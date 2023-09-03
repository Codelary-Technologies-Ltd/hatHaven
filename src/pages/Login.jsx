import React from 'react'
import catStyle from "../sass/components/categoryHeader.module.scss";
import style from "../sass/pages/auth.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='container'>
        <div className={style.auth}>
            <header className={catStyle.categoryHeaderContent}>
                <h1>LOG IN</h1>
            </header>
            <section className={style.authDetails}>
                <form className={style.authDetailsForm}>
                    <label htmlFor="email">Your email</label>
                    <input type="email" name="email" id= "email" placeholder="bill.sanders@example.com" />
                    <label htmlFor="password">Your password</label>
                    <input type="password" name="password" id= "password" placeholder="ZB0mLzLH7CU" />
                    <span className={style.authDetailsFormForgot} >
                        <p>Forgot your password?</p>
                    </span>
                    <button type="submit">Log in</button>
                </form>
                <aside>
                    <p>Don’t have an account yet?</p>
                    <Link to='/sign-up'>
                        <a href="#">Sign up</a>
                    </Link>
                </aside>
            </section>
        </div>
    </div>
  )
}

export default Login