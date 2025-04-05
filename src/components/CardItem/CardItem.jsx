import React, { useState } from "react";
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

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <div className={s.cardWrapper}>
      <div className={s.cardMainWrapper}>
        <div className={s.cardImageWrapper}>
          <img src={img} alt="car image" className={s.cardImage} />
          <button className={s.favorite} onClick={toggleFavorite}>
            <svg width="16" height="16">
              <use
                href={`/hearts.svg#${
                  isFavorite ? "icon-heart-blue" : "icon-heart"
                }`}
              ></use>
            </svg>
          </button>
        </div>

        <div>
          <div className={s.cardInfoWrapper}>
            <h2 className={s.mainInfo}>
              {brand} <span>{model}</span>, {year}
            </h2>
            <span className={s.priceInfo}>${rentalPrice}</span>
          </div>

          <div className={s.secondaryInfo}>
            <div className={s.row}>
              <span>{addressArray[1]}</span>
              <span>{addressArray[2]}</span>
              <span>{rentalCompany}</span>
            </div>
            <div className={s.row}>
              <span>{type}</span>
              <span>{mileageWithSpace} km</span>
            </div>
          </div>
        </div>
      </div>
      <button className={s.readMoreButton}>Read more</button>
    </div>
  );
};

export default CardItem;
