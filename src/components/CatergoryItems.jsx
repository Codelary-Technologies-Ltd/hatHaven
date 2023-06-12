import React from "react";
import style from "./../sass/components/categoryItems.module.scss";
import images from "./../data/categoryItems.json";
const CatergoryItems = () => {
  return (
    <div className="container">
      <div className={style.catergoryItems}>
        {images.map((image) => {
          return (
            <div className={style.catergoryItem}>
              <p>New</p>
              <img
                src={image.itemImage}
                alt="bucket-hat"
                className={style.catergoryItemImg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatergoryItems;
