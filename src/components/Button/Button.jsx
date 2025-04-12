import React from "react";
import s from "./Button.module.css";
import { clsx } from "clsx";

const Button = ({ children, variant, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(s.button, s[variant])}>
      {children}
    </button>
  );
};

export default Button;
