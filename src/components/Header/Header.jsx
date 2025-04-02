import React from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <svg width="104" height="16">
        <use href="/public/icons.svg#icon-RentalCar"></use>
      </svg>

      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
