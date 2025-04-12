import React from "react";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import Header from "../../components/Header/Header.jsx";
import s from "./DetailsPage.module.css";
import BookForm from "../../components/BookForm/BookForm.jsx";

const DetailsPage = () => {
  return (
    <div className={s.container}>
      <Header />
      <CarDetails />
      <BookForm />
    </div>
  );
};

export default DetailsPage;
