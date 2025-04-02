import React from "react";
import Header from "../../components/Header/Header.jsx";
import s from "./HomePage.module.css";
import MainPage from "../../components/MainPage/MainPage.jsx";

const HomePage = () => {
  return (
    <div className={s.container}>
      <Header />
      <MainPage />;
    </div>
  );
};

export default HomePage;
