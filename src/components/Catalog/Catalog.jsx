import axios from "axios";
import React, { useEffect, useState } from "react";
import CatalogForm from "../CatalogForm/CatalogForm.jsx";
import CardList from "../CardList/CardList.jsx";

const Catalog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://car-rental-api.goit.global/cars"
      );
      setData(response.data.cars);
    }
    fetchData();
  }, []);

  const handleFetch = async ({
    brand,
    rentalPrice,
    minMileage,
    maxMileage,
  }) => {
    const response = await axios.get(
      `https://car-rental-api.goit.global/cars?brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}`
    );
    setData(response.data.cars);
  };
  return (
    <div>
      <CatalogForm onSubmit={handleFetch} />
      {data.length > 0 && <CardList carList={data} />}
    </div>
  );
};

export default Catalog;
