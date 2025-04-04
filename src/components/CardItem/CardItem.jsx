import React from "react";
import s from "./CardItem.module.css";

const CardItem = ({
  carInfo: {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  },
}) => {
  const addressArray = address.split(",");
  const mileageWithSpace = mileage.toLocaleString("uk");
  return (
    <div className={s.cardWrapper}>
      <div className={s.cardImageWrapper}>
        <img src={img} alt="car image" className={s.cardImage} />
        <button className={s.favorite}>
          <svg width="16" height="16">
            <use href="/public/icons.svg#icon-heart"></use>
          </svg>
        </button>

        <div className={s.cardInfoWrapper}>
          <h2 className={s.mainInfo}>
            {brand}
            {model}, {year}
          </h2>
          <span className={s.priceInfo}>${rentalPrice}</span>
        </div>

        <div className={s.secondaryInfo}>
          <div>
            {addressArray[1]} | {addressArray[2]} | {rentalCompany} |
          </div>
          <div>
            {type} | {mileageWithSpace} km
          </div>
        </div>
      </div>
      <button className={s.readMoreButton}>Read more</button>
    </div>
  );
};

export default CardItem;
