import React from "react";
import style from "./../sass/components/categoryHeader.module.scss";
const CategoryHeader = () => {
  return (
    <header className="container">
        <div className={style.categoryHeader}>
            <nav className={style.categoryHeaderTopNav}>
                <p>Home/ BucketHat</p>
            </nav>
            <div className={style.categoryHeaderContent}>
                <h1 className={style.categoryHeaderContentHeader}>BUCKET HAT</h1>
                <p className={style.categoryHeaderContentDetails}>
                Stay cool and stylish this season with our trendy bucket hat
                collection. Whether you're headed to the beach or just running errands
                around town, our bucket hats will keep you looking and feeling great.
                Shop now and upgrade your hat game.
                </p>
            </div>
            <nav className={style.categoryHeaderBottomNav}>
                <ul>
                    <li>CATEGORY</li>
                    <li className={style.categoryHeaderBottomNavFilter}>FILTER</li>
                    <li>SORT BY</li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default CategoryHeader;
