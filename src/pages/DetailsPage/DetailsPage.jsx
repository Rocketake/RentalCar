import React from "react";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import Header from "../../components/Header/Header.jsx";
import s from "./DetailsPage.module.css";
import BookForm from "../../components/BookForm/BookForm.jsx";

const DetailsPage = () => {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.detailsPageWrapper}>
        <img src="../../../public/bg-image.jpg" alt="" width="640px" />
        <CarDetails />
        <BookForm />
      </div>
    </div>
  );
};

export default DetailsPage;
