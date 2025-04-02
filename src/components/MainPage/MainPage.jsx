import React from "react";
import s from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <main className={s.mainWrapper}>
      <section className={s.section}>
        <div className={s.textWrapper}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <h2 className={s.subtitle}>
            Reliable and budget-friendly rentals for any journey
          </h2>
        </div>
        <button onClick={() => navigate("/catalog")} className={s.button}>
          View Catalog
        </button>
      </section>
    </main>
  );
};

export default MainPage;
