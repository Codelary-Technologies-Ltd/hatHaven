import React from "react";
import style from "./../sass/components/itemCheckout.module.scss";
import img from "./../assets/png/bucketHat2.png";

const ItemCheckout = () => {
  return (
    <div className={style.itemCheckoutWrapper}>
      <div className={style.itemCheckout}>
        <div className={style.itemCheckoutCard}>
          <div className={style.itemCheckoutCardDetails}>
            <div className={style.itemCheckoutCardDetailsImage}>
              <img src={img} alt="item-image" />
              <p className={style.itemCheckoutCardDetailsImageCount}>1</p>
            </div>
            <ul>
              <li>
                <h2>Warning Bucket Hat</h2>
              </li>
              <li className={style.itemCheckoutCategory}>Unisex/Orange</li>
            </ul>
          </div>
          <h2 className={style.itemCheckoutPrice}>$14.90</h2>
        </div>

        <div className={style.itemCheckoutCoupon}>
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Gift card or discount code"
          />
          <button>Apply</button>
        </div>
        <ul className={style.itemCheckoutCalculate}>
          <li>
            <p>Subtotal</p> <p className={style.itemCheckoutCalculatePrice}>$14.90</p>
          </li>
          <li>
            <p>Shipping</p> <p>Calculated at next step</p>
          </li>
          <li className={style.total}>
            <p>Total</p>{" "}
            <p>
              <span className={style.denom}>USD</span>{" "}
              <span className={style.itemCheckoutCalculatePrice}>$14.90</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemCheckout;
