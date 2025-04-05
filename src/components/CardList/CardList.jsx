import React from "react";
import CardItem from "../CardItem/CardItem.jsx";
import s from "./CardList.module.css";

const CardList = ({ carList }) => {
  return (
    <ul className={s.listWrapper}>
      {carList.map((car) => (
        <li>
          <CardItem carInfo={car} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
