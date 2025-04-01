import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import s from "./MainPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MainPage = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <a href="">
          <svg width="104" height="16">
            <use href="/public/icons.svg#icon-RentalCar"></use>
          </svg>
        </a>
        <nav>
          <ul className={s.list}>
            <li className={s.link}>Home</li>
            <li className={s.link}>Movies</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainPage;
