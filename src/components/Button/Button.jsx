import React from "react";
import s from "./Button.module.css";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

const Button = ({ children, variant, path }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(`/catalog/${path}`);
      }}
      className={clsx(s.button, s[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
