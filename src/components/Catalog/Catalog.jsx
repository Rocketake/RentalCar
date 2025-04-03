import axios from "axios";
import React, { useEffect, useState } from "react";
import CatalogForm from "../Form/CatalogForm.jsx";

const Catalog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const arrData = await axios.get(
        "https://car-rental-api.goit.global/cars"
      );
      setData(arrData);
    }
    fetchData();
  }, []);
  const [filteredData, setFilteredData] = useState([]);

  const handleFetch = async ({
    brand,
    rentalPrice,
    minMileage,
    maxMileage,
  }) => {
    const response = await axios.get(
      `https://car-rental-api.goit.global/cars?brand=${brand}&rentalPrice=${rentalPrice}&minMileage=${minMileage}&maxMileage=${maxMileage}`
    );
    setFilteredData(response.data);
  };
  console.log(filteredData);

  return (
    <div>
      <CatalogForm onSubmit={handleFetch} />
    </div>
  );
};

export default Catalog;
