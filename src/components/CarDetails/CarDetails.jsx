import axios from "axios";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./CarDetails.module.css";

const CarDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchCarData = async () => {
        const response = await axios.get(
          `https://car-rental-api.goit.global/cars/${id}`
        );
        setData(response.data);
        console.log(response.data);
      };
      fetchCarData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Fragment>
      <div className={s.carMainDetailsWrapper}>
        <h2 className={s.carMainDetailsTitle}>
          {data.brand} {data.model}, {data.year}{" "}
          <span className="s.id">id: {data.id && data.id.slice(0, 4)}</span>
        </h2>
        <div className={s.carMainDetailsInfoWrapper}>
          <p>
            <svg className="" width="16px" height="16px">
              <use href="../../../public/icons.svg#icon-Location"></use>
            </svg>
            {data.address && data.address.split(", ").slice(1).join(", ")}
          </p>
          <p>Mileage: {data.mileage} km</p>
        </div>
        <span className={s.price}>${data.rentalPrice}</span>
        <p className={s.description}>{data.description}</p>
      </div>
    </Fragment>
  );
};

export default CarDetails;
