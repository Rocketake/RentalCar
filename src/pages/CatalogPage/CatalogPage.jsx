import React from "react";
import s from "./Catalog.module.css";
import Header from "../../components/Header/Header.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";
const CatalogPage = () => {
  return (
    <div className={s.container}>
      <Header />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
