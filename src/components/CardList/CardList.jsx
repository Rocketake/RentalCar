import React from "react";
import CardItem from "../CardItem/CardItem.jsx";

const CardList = ({ carList }) => {
  return (
    <div>
      {carList.map((car) => (
        <CardItem carInfo={car} />
      ))}
    </div>
  );
};

export default CardList;
