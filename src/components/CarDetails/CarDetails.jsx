import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    try {
      const fetchCarData = async () => {
        const response = await axios.get(
          `https://car-rental-api.goit.global/cars/${id}`
        );
        setData(response.data);
      };
      fetchCarData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return <>{data && <img src={data.img} alt="" width="640px" />}</>;
};

export default CarDetails;
