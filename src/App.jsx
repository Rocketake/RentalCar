import React from "react";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalog" element={<CatalogPage />}></Route>
    </Routes>
  );
};

export default App;
